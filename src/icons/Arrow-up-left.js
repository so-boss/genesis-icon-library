import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeft = props => {
  const { color, size, background, variants, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={96}
      height={96}
      viewBox="0 0 96 96"
      fill={color}
      {...otherProps}
    >
      <svg width="96" height="96" xmlns="http://www.w3.org/2000/svg">
        <g id="up-left">
          <path
            id="Union"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28 24a4 4 0 00-4 4v40a4 4 0 008 0V37.364l33.172 33.464a4 4 0 105.656-5.657L37.948 32H68a4 4 0 000-8H28z"
          />
        </g>
      </svg>
    </svg>
  );
};

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  variants: PropTypes.object
};

ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default ArrowUpLeft;
