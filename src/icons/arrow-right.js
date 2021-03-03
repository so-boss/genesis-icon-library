import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = props => {
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
        d="M50.828 17.172a4 4 0 10-5.656 5.656L66.343 44H20a4 4 0 000 8h46.343L45.172 73.172a4 4 0 105.656 5.656l28-28a4 4 0 000-5.656l-28-28z"
      ></path>
    </svg>
  );
};

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowRight.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default ArrowRight;
