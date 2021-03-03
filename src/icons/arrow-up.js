import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = props => {
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
        d="M50.828 17.172a4 4 0 00-5.656 0l-28 28a4 4 0 105.656 5.656L44 29.657V76a4 4 0 008 0V29.657l21.172 21.171a4 4 0 105.656-5.656l-28-28z"
      ></path>
    </svg>
  );
};

ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUp.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default ArrowUp;
