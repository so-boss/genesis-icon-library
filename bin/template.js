const getAttrs = (style, height, width) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height
  }
  const fillAttrs = {
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
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import PropTypes from 'prop-types';

  const ${ComponentName} = (props) => {
    const { color, size, ...otherProps } = props;
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
  }

  ${ComponentName}.defaultProps = {
    color: 'currentColor',
    size: '48',
  }

  export default ${ComponentName}
`

module.exports = { getAttrs, getElementCode }
