const got = require('got')
const {ensureDir, writeFile} = require('fs-extra')
const {join, resolve} = require('path')
const Figma = require('figma-js')
const PQueue = require('p-queue')
require('dotenv').config()
const {FIGMA_TOKEN, FIGMA_FILE_URL} = process.env

const options = {
  format: 'svg',
  outputDir: './src/',
  scale: '1',
  include_id: true,
  simplify_stroke: true,
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

console.log(`Exporting ${FIGMA_FILE_URL} components`)
client.file(fileId)

  .then(({ data }) => {
    console.log('Processing response')
    const things = {
      groups: {},
      components: {}
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
          things.groups[group_name].children[name] = {
            name, id
          }
        }

        console.log(c)
        things.components[id] = {
          component_name,
          name: component_name,
          id,
          key,
          group: group_name,
          file: fileId,
          description,
          width,
          height
        }
      } else if (c.children) {
        // eslint-disable-next-line github/array-foreach
        c.children.forEach(check)
      }
    }

    // console.log(data.document.children)
    data.document.children.forEach(check)
    if (Object.values(things.components).length === 0) {
      throw Error('No components found!')
    }

    //console.log(things.groups)
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
