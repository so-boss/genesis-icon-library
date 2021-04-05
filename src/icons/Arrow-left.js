import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = props => {
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
        <g id="left">
          <path
            id="Union"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50.828 22.828a4 4 0 10-5.656-5.656l-28 28a4 4 0 000 5.656l28 28a4 4 0 105.656-5.656L29.657 52H76a4 4 0 000-8H29.657l21.171-21.172z"
          />
        </g>
      </svg>
    </svg>
  );
};

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  variants: PropTypes.object
};

ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default ArrowLeft;
