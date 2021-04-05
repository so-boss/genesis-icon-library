import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRight = props => {
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
        <g id="down-right">
          <path
            id="Union"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.828 25.172a4 4 0 10-5.656 5.656L58.343 64H28a4 4 0 000 8h40.019a3.99 3.99 0 002.831-1.194A3.987 3.987 0 0072 68.02V28a4 4 0 00-8 0v30.343L30.828 25.172z"
          />
        </g>
      </svg>
    </svg>
  );
};

ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  variants: PropTypes.object
};

ArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default ArrowDownRight;
