import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.828 22.828a4 4 0 10-5.656-5.656l-28 28a4 4 0 000 5.656l28 28a4 4 0 105.656-5.656L29.657 52H76a4 4 0 000-8H29.657l21.171-21.172z"
      ></path>
    </svg>
  );
};

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default ArrowLeft;
