require('dotenv').config()
const got = require('got')
const {ensureDir, writeFile} = require('fs-extra')
const {join, resolve} = require('path')
const Figma = require('figma-js')
const PQueue = require('p-queue')
const {FIGMA_TOKEN, FIGMA_FILE_URL} = process.env
const {GraphQLClient, gql} = require('graphql-request');

const dictionary = {
  colors:{}
}

const registry = {
  groups: {},
  variants: {}
}

// // color_tokens().catch((error) => console.error(error))
async function color_tokens() {
  const endpoint = 'https://xdapi.toolabs.com/graphql';

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "x-toolabs-token" : '0781d947-72ac-464f-b46d-aa37c7e4ebb3'
    },
  })

  const QUERY = gql`
    {
      colors {
        id
        name
        hex
      }
    }
  `;

  const data = await graphQLClient.request(QUERY);

  data.colors.forEach(function(token) {
    dictionary.colors[token.name] = token;
  })
  //console.log(JSON.stringify(data, undefined, 2))
}

const options = {
  format: 'svg',
  outputDir: './src/',
  scale: '1',
  include_id: true,
  simplify_stroke: false,
}

for(const arg of process.argv.slice(2)) {
  const [param, value] = arg.split('=')
  if(options[param]) {
    options[param] = value
  }
}

if(!FIGMA_TOKEN) {
  throw Error('Cannot find FIGMA_TOKEN in process!')
}

const client = Figma.Client({
  personalAccessToken: FIGMA_TOKEN
})

// Fail if there's no figma file key
let fileId = null
if (!fileId) {
  try {
    fileId = FIGMA_FILE_URL.match(/file\/([a-z0-9]+)\//i)[1]
  } catch (e) {
    throw Error('Cannot find FIGMA_FILE_URL key in process!')
  }
}

/*
{
  id: '5908:702',
  name: 'color',
  fill: undefined,
  type: 'VECTOR',
  blendMode: 'PASS_THROUGH',
  absoluteBoundingBox: {
    x: 671.8193969726562,
    y: 384.6004943847656,
    width: 38.13772964477539,
    height: 12.658931732177734
  },
  constraints: { vertical: 'SCALE', horizontal: 'SCALE' },
  fills: [ { blendMode: 'NORMAL', type: 'SOLID', color: [Object] } ],
  strokes: [],
  strokeWeight: 0.48984235525131226,
  strokeAlign: 'INSIDE',
  styles: { fill: '5901:550' },
  effects: []
}
*/
const filter_for_names = ["color"]
const extract_special_layers = (layers, styles_in_figma) => {
  const layer = layers.filter( i => filter_for_names.includes( i.name ) )[0]
  if(layer) {
    const definitions = {
      fill: dictionary.colors[styles_in_figma[layer.styles.fill].name]
    }

    return {
      id: layer.id,
      name: layer.name,
      fill: layer.fills[0].color,
      styles: styles_in_figma[layer.styles.fill],
      definitions: definitions
    }
  }
  return false;

}
color_tokens();
console.log(`Exporting ${FIGMA_FILE_URL} components`)
client.file(fileId)
  .then(({ data }) => {

    console.log('Processing response')
    const things = {
      groups: {},
      components: {},
      styles: data.styles
    }
    // const groups = {}
    // const components = {}
    let group_name = null;

    function check(c) {
      //console.log(arguments)
      // && c.visible!==false
      if (c.type === 'FRAME') {
        const {name, id} = c;
        things.groups[name] = {
          name,
          id,
          children: {}
        }

        group_name = name;

        // c.children.forEach(check(c, name))
      }

      if (c.type === 'COMPONENT') {
        const {name, id} = c
        const {description, key} = data.components[c.id]
        const {width, height} = c.absoluteBoundingBox

        let component_name = name;


        if(group_name) {
          const split_name = name.split("-");
          const variant = {
            name: split_name[0],
            prop: split_name[1]
          };

          if(variant.name && variant.prop) {
            // TODO: Create a recursive approach to assessing stuff like this
            let registered_group = registry.groups[group_name];
            if (!registered_group) {
              registered_group = registry.groups[group_name] = {}
            }
            let registered_variant = registered_group[variant.name];
            if (!registered_variant) {
              registered_variant = registered_group[variant.name] = {
                // TODO: Externalize how this works
                // EHHH: Should colors be an object or at least check against an object to prevent dups
                colors: []
              };
            }

            if(description) {
              try {
                console.log(JSON.parse(description))
              } catch (err) {

              }

            }
            registered_variant.colors.push(variant.prop)
          }

          things.groups[group_name].children[name] = {
            name, id
          }
        }

        let special_layer = null;
        if(c.children[0]) {
          let layers = c.children[0];
          if(layers.children) {
            layers = layers.children;
            let layer = extract_special_layers(layers, things.styles);
            if(layer) {
              special_layer = layer;
              //console.log(group_name, component_name, layer)
            }
          }
        }

        things.components[id] = {
          component_name,
          name: component_name,
          id,
          key,
          group: group_name,
          file: fileId,
          description,
          width,
          height,
        }
        // NOTE: Special Layer is not how we are identifying variants exclusively
        if(special_layer) {
          things.components[id].variants = {
            fill: special_layer
          };
        }
      } else if (c.children) {
        // eslint-disable-next-line github/array-foreach
        c.children.forEach(check)
      }
    }

    data.document.children.forEach(check)
    if (Object.values(things.components).length === 0) {
      throw Error('No components found!')
    }

    console.log(registry.groups)
    console.log(`${Object.values(things.components).length} components found in the figma file`)
    return things;
  })
  .then(things => {
    console.log('Getting export urls')
    return client.fileImages(
      fileId,
      {
        format: options.format,
        ids: Object.keys(things.components),
        scale: options.scale,
        svg_include_id: options.include_id,
        svg_simplify_stroke: options.simplify_stroke,
      }
    ).then(({data}) => {
      for(const id of Object.keys(data.images)) {
        things.components[id].image = data.images[id]
      }
      return things
    })
  })
  .then(things => {
    return ensureDir(join(options.outputDir))
      .then(() => writeFile(resolve(options.outputDir, 'data.json'), JSON.stringify(things), 'utf8'))
      .then(() => things)
  })
  .then(things => {
    const contentTypes = {
      'svg': 'image/svg+xml',
      'png': 'image/png',
      'jpg': 'image/jpeg'
    }
    return queueTasks(Object.values(things.components).map(component => () => {
      return got.get(component.image, {
        headers: {
          'Content-Type': contentTypes[options.format]
        },
        encoding: (options.format === 'svg' ? 'utf8' : null)
      })
      .then(response => {
        return ensureDir(join(options.outputDir, options.format))
          .then(() => {
            //console.log(component)
            let name_to_write = component.name;
            if(name_to_write) {
              name_to_write = component.group + "-" + name_to_write;
              writeFile(join(options.outputDir, options.format, `${name_to_write}.${options.format}`), response.body, (options.format === 'svg' ? 'utf8' : 'binary'))
            }
          })
      })
    }))
  })
  .catch(error => {
    throw Error(`Error fetching components from Figma: ${error}`)
  })

function queueTasks(tasks, options) {
  const queue = new PQueue(Object.assign({concurrency: 3}, options))
  for (const task of tasks) {
    queue.add(task)
  }
  queue.start()
  return queue.onIdle()
}

/*
<SedanSideYellowIcon height="56" width="56" />

<SedanSideYellowIcon size="small" />

<SedanSideIcon fill="#EF5F54" size="medium" />

<SedanSideIcon fill="red" size="medium" />

<SedanIcon view="side" fill="red" size="medium" />

<ArrowIcon pointing="east" fill="red" size="medium" />

<Icon.Sedan view="front" fill="red" size="medium" />
 */