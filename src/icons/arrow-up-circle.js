import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpCircle = props => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48 12c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36zM4 48C4 23.7 23.7 4 48 4s44 19.7 44 44-19.7 44-44 44S4 72.3 4 48z"
        fill="#000"
      ></path>
      <path
        d="M50.828 29.172a4 4 0 00-5.656 0l-16 16a4 4 0 105.656 5.656L44 41.657V64a4 4 0 008 0V41.657l9.172 9.171a4 4 0 105.656-5.656l-16-16z"
        fill="#000"
      ></path>
    </svg>
  );
};

ArrowUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpCircle.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default ArrowUpCircle;
