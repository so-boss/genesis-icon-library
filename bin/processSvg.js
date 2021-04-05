const Svgo = require('svgo');
const cheerio = require('cheerio')
const { SVG } = require('@svgdotjs/svg.js');
/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase())
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimize(svg) {
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
      { removeTitle: false },
      { cleanupIDs: false },
      { removeHiddenElems: false },
      { collapseGroups: false },
      { removeEmptyContainers: false },
      { removeViewBox: true },
      { removeUselessStrokeAndFill: true },
    ],
  });

  return new Promise(resolve => {
    svgo.optimize(svg).then(({ data }) => resolve(data));
  });
}

function modify_paths(svg_code) {
  let draw = SVG();
  let svg_modified = draw.svg(svg_code);

  return svg_modified.svg()
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg, variants) {
  const $ = cheerio.load(svg);
  const $body = $('body');

  const $color = $body.find("#color");
  //console.log("COLOR", $color)

  if($color && (variants && variants.fill)) {
    const defs = variants.fill.definitions;
    console.log("DEFS", defs)

    if(defs.fill) {
      $color.attr("fill", defs.fill.hex);
    }
    //console.log("COLOR ELEMENT", variants.fill.definitions)
  }

  return $('body').children().html();
}

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg, variants) {

  const optimized = await optimize(svg)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then(svg => svg.replace(/;/g, ''))
    .then(removeSVGElement(svg, variants))
    .then(svg => {
      if(svg) {
        svg.replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => `${a}${CamelCase(b)}=`)
      }
      return svg
    })
  return optimized;
}

module.exports = processSvg;
