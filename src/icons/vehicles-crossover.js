import React from 'react';
import PropTypes from 'prop-types';

const VehiclesCrossover = props => {
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
        d="M12.869 68.4h62.485a1.352 1.352 0 110 2.706H12.87a1.352 1.352 0 110-2.705zm69.18 0h.609a1.352 1.352 0 010 2.706h-.609a1.353 1.353 0 010-2.705z"
        fill="#4D5160"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M61.762 59.638c0 4.463 3.651 8.115 8.115 8.115a8.095 8.095 0 008.115-8.115c0-4.463-3.652-8.115-8.115-8.115-4.464 0-8.115 3.652-8.115 8.115zm2.705-.067c0-2.976 2.434-5.41 5.41-5.41 3.043 0 5.477 2.434 5.41 5.41 0 2.975-2.435 5.41-5.41 5.41-2.976 0-5.41-2.435-5.41-5.41zm1.42-.136a3.954 3.954 0 003.99 3.99 3.954 3.954 0 003.99-3.99 3.954 3.954 0 00-3.99-3.99 3.954 3.954 0 00-3.99 3.99zm2.705 0c0-.676.608-1.285 1.285-1.285.743 0 1.284.61 1.284 1.285 0 .677-.608 1.285-1.284 1.285-.677 0-1.285-.608-1.285-1.285z"
        fill="#4D5160"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.912 59.638c0 4.463 3.652 8.115 8.115 8.115s8.115-3.652 8.115-8.115-3.652-8.115-8.115-8.115-8.115 3.652-8.115 8.115zm2.705-.067c0-2.976 2.435-5.41 5.41-5.41 2.976 0 5.41 2.434 5.41 5.41 0 2.975-2.434 5.41-5.41 5.41-2.975 0-5.41-2.435-5.41-5.41zm1.42-.136a3.954 3.954 0 003.99 3.99c2.164 0 3.99-1.758 3.99-3.99a3.954 3.954 0 00-3.99-3.99 3.954 3.954 0 00-3.99 3.99zm2.705 0c0-.676.609-1.285 1.285-1.285.676 0 1.285.61 1.285 1.285 0 .677-.609 1.285-1.285 1.285-.676 0-1.285-.608-1.285-1.285z"
        fill="#4D5160"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M66.565 34.073a1.36 1.36 0 01-1.83.606l-8.18-4.12c-5.012-2.568-10.604-3.86-16.239-3.82-.744.004-1.374-.566-1.411-1.31-.038-.75.544-1.39 1.295-1.393a38.923 38.923 0 0117.572 4.09l8.188 4.122c.67.338.94 1.154.605 1.825zM30.79 25.758a1.354 1.354 0 102.705-.135 1.354 1.354 0 00-2.705.135zM81.463 58.93a1.356 1.356 0 11-.321-2.693l2.29-.267a2 2 0 001.757-1.781l.141-1.36c-.05-.005-.1-.012-.15-.023l-5.633-1.215a3.832 3.832 0 01-2.3-1.488l-1.832-2.46a1.898 1.898 0 011.722-3.021l5.489.582a8.688 8.688 0 00-4.905-2.742l-10.906-2.064-4.28 2.835a2 2 0 01-1.252.328l-40.34-2.988a1 1 0 01-.925-1.048l.02-.377c.202-3.449.81-4.058 1.081-4.26l.203-.136 4.302-2.713a18.029 18.029 0 00-7.075 2.713l-3.787 2.502a8.698 8.698 0 00-3.406 4.227c.01 0 .019.002.028.003l5.268.67a1.337 1.337 0 011.154 1.525c-.318 2.222-.47 2.87-.618 3.178-.07.143-.143.287-.244.411-.278.343-1.2.773-6.171 2.726v3.025a2 2 0 00.983 1.722l1.987 1.173a1.342 1.342 0 01-1.35 2.32l-3.388-1.942A2 2 0 018 54.557v-9.864c0-3.922 1.961-7.506 5.207-9.67l3.787-2.502c3.11-2.029 6.763-3.179 10.414-3.381l12.105-.541c5.275-.271 10.617.879 15.35 3.313l10.77 5.483c.168.086.348.148.534.183l11.825 2.246c4.26.812 7.641 3.855 8.858 7.98l1.033 3.402a2 2 0 01.076.784l-.473 4.638a2 2 0 01-1.749 1.783l-4.274.52zm-1.307-9.909l4.756 1.026-.428-1.5a9.011 9.011 0 00-.297-.84c-.27.218-.622.333-.994.294l-3.274-.338a.558.558 0 00-.507.885c.203.27.473.405.743.473zM53.849 34.347l9.776 4.946-1.767 1.169a2 2 0 01-1.251.326l-37.196-2.75a.492.492 0 01-.453-.569c.026-.157.052-.3.078-.425a.474.474 0 01.214-.302l8.003-5.058 8.598-.38c4.802-.203 9.67.879 13.998 3.043zM10.773 44.693c0-.187.005-.374.017-.56.08.027.163.046.249.057l3.383.434c.29.037.501.343.452.63-.023.132-.112.215-.234.27-.771.345-2.248.943-3.867 1.587v-2.418zM30.718 60.5l.115-2.702 31.688 1.352-.116 2.703L30.718 60.5zm27.536-3.352a1.355 1.355 0 00.117-2.708l-22.235-.972c-.714-.031-1.346-.448-1.735-1.049-2.614-4.041-7.42-6.224-12.23-5.497-.74.112-1.173.858-.987 1.583.188.732.937 1.16 1.688 1.072 3.972-.47 7.907 1.558 9.695 5.181.175.355.427.67.756.89l.247.164a2 2 0 001.025.334l23.66 1.002z"
        fill="#4D5160"
      ></path>
    </svg>
  );
};

VehiclesCrossover.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VehiclesCrossover.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default VehiclesCrossover;