const make_rgba = (o) => {
  return "rgba("+o.r+","+o.g+","+o.b+","+o.a+")";
}
const getAttrs = (style, height, width, variants) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height
  }
  let fillAttrs = {
    fill: 'color',
    otherProps: '...otherProps'
  }
  const strokeAttrs = {
    fill: 'none',
    stroke: 'color',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    otherProps: '...otherProps'
  }

  /*
      NOTE: THIS SHOULD NOT BE SO NESTED
            Fill has definitions inside of it
            variants.fill.definitions.fill.hex (YUCK)

      fill: {
        id: '5908:702',
        name: 'color',
        fill: {
          r: 0.501960813999176,
          g: 0.7137255072593689,
          b: 0.9411764740943909,
          a: 1
        },
        styles: {
          key: '9003c884a890c17439c228c58f9bb04b6e382398',
          name: 'Blue 20',
          styleType: 'FILL',
          description: ''
        },
        definitions: {
          fill: {
            id: 'q4JF7W-foq',
            name: 'Grey 20',
            hex: '#cfd2e0'
          }
        }
      }
  */
  // if(variants) {
  //   //console.log("VARIANT ALERT", variants)
  //   if(variants.fill) {
  //
  //     let defs = variants.fill.definitions;
  //     if(!defs.fill) {
  //       fillAttrs.fill = make_rgba(variants.fill.fill)
  //     } else {
  //       fillAttrs.fill = variants.fill.definitions.fill.hex
  //     }
  //     fillAttrs.fill = fillAttrs.fill.toString();
  //
  //   }
  // }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import PropTypes from 'prop-types';

  const ${ComponentName} = (props) => {
    const { color, size, background, variants, ...otherProps } = props;
    return (
      <svg ${attrs}>
        ${svgCode}
      </svg>
    )
  };

  ${ComponentName}.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    background: PropTypes.string,
    variants: PropTypes.object
  }

  ${ComponentName}.defaultProps = {
    color: 'currentColor',
    size: '48'
  }

  export default ${ComponentName}
`

module.exports = { getAttrs, getElementCode }
