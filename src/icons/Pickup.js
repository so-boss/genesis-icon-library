import React from 'react';
import PropTypes from 'prop-types';

const Pickup = props => {
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
      <path d="M83.59 64.913H11.025v2.52H83.59v-2.52z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.606 57.874c0 4.157 3.402 7.56 7.56 7.56a7.54 7.54 0 007.558-7.56c0-4.157-3.401-7.559-7.559-7.559-4.157 0-7.559 3.402-7.559 7.56zm2.52-.063a5.054 5.054 0 015.04-5.04c2.834 0 5.102 2.268 5.039 5.04 0 2.772-2.268 5.04-5.04 5.04a5.054 5.054 0 01-5.039-5.04zm1.323-.063a3.684 3.684 0 003.716 3.717c2.08 0 3.717-1.701 3.717-3.717a3.684 3.684 0 00-3.717-3.716 3.684 3.684 0 00-3.716 3.716zm2.52 0c0-.63.567-1.197 1.196-1.197.693 0 1.197.504 1.197 1.197 0 .63-.567 1.197-1.197 1.197-.63 0-1.197-.567-1.197-1.197z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.835 57.874c0 4.157 3.401 7.56 7.559 7.56a7.54 7.54 0 007.559-7.56c0-4.157-3.402-7.559-7.56-7.559-4.157 0-7.558 3.402-7.558 7.56zm2.52-.063a5.054 5.054 0 015.039-5.04c2.834 0 5.102 2.268 5.039 5.04a5.054 5.054 0 01-5.04 5.04 5.054 5.054 0 01-5.039-5.04zm1.322-.063a3.684 3.684 0 003.717 3.717c2.079 0 3.716-1.701 3.716-3.717a3.684 3.684 0 00-3.716-3.716 3.684 3.684 0 00-3.717 3.716zm2.52 0c0-.63.567-1.197 1.197-1.197.693 0 1.197.504 1.197 1.197 0 .63-.567 1.197-1.197 1.197-.63 0-1.197-.567-1.197-1.197z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.102 51.449l-.138-1.766a1.32 1.32 0 01-.074.002H77.92a3.656 3.656 0 01-3.653-3.654c0-.66.536-1.196 1.197-1.196h.126c.66 0 1.196.535 1.196 1.197 0 .63.504 1.133 1.134 1.133h3.848l-.005-.063c-.313-1.936-1.801-3.438-3.669-3.77a.552.552 0 00-.096-.01.59.59 0 01-.152-.02l-9.317-2.487a2.001 2.001 0 01-.484-.2H45.669c-.693 0-1.386-.316-1.89-.82-.503-.504-.692-1.197-.63-1.953l.442-5.039c.126-1.323 1.196-2.268 2.52-2.268h4.834a1.26 1.26 0 010 2.52h-4.377a.5.5 0 00-.498.456l-.353 4.04a.5.5 0 00.498.543H66.17l-5.635-8.818c-.314-.441-.881-.756-1.448-.756H43.59c-.945 0-1.701.693-1.764 1.575l-.945 9.322v9.134a1.26 1.26 0 01-2.52 0v-9.323l.945-9.386C39.56 27.639 41.386 26 43.591 26h15.496c1.448 0 2.771.693 3.59 1.89l6.259 9.86a2 2 0 001.172.86l8.443 2.256c2.94.563 5.26 2.866 5.723 5.859.007.041.01.084.01.125l.343 4.47c.004.047.005.094.003.14 1.098.115 1.984 1.071 1.984 2.194v.125c0 3.087-2.52 5.544-5.543 5.544h-4.977v-2.52h4.977c1.638 0 2.96-1.26 3.023-2.834H79.37a1.26 1.26 0 010-2.52h2.732zm-22.385 2.457a1.26 1.26 0 100-2.52h-22.37a2 2 0 01-1.537-.72l-3.525-4.23a2 2 0 00-1.537-.72H12.41v-4.602a.5.5 0 01.5-.5h19.847a1.26 1.26 0 000-2.52H10.89a1 1 0 00-1 1v12.418c0 .147.025.288.071.42A3.818 3.818 0 008 55.291c0 2.141 1.7 3.842 3.842 3.842h6.993a1.26 1.26 0 000-2.52h-6.993a1.292 1.292 0 01-1.322-1.323c0-.756.567-1.323 1.322-1.323h2.08a1.26 1.26 0 100-2.52h-1.513v-3.212h17.15a2 2 0 011.528.71l3.59 4.25a2 2 0 001.527.71h23.513zm2.582 2.897H32.756v2.52h29.543v-2.52zm-4.535-25.008a1.26 1.26 0 11-2.52 0 1.26 1.26 0 012.52 0z"
      ></path>
    </svg>
  );
};

Pickup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pickup.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default Pickup;