import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpRight = props => {
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
        d="M28 24a4 4 0 000 8h30.053L25.172 65.171a4 4 0 005.656 5.657L64 37.364V68a4 4 0 008 0V28a4 4 0 00-4-4H28z"
        fill="#000"
      ></path>
    </svg>
  );
};

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default ArrowUpRight;
