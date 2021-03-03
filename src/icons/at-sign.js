import React from 'react';
import PropTypes from 'prop-types';

const AtSign = props => {
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
        d="M58 5.154a44 44 0 1016.752 77.782 4 4 0 10-4.864-6.352A36 36 0 1184 48v4a8 8 0 01-16 0V32a4 4 0 00-8-.001A19.911 19.911 0 0048 28c-11.046 0-20 8.954-20 20s8.954 20 20 20a19.95 19.95 0 0014.961-6.727A16 16 0 0092 52v-4A44 44 0 0058 5.154zM36 48c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12z"
      ></path>
    </svg>
  );
};

AtSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AtSign.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default AtSign;
