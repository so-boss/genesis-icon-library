import React from 'react';
import PropTypes from 'prop-types';

const SuvCompactCrossoverRed = props => {
  const { color, size, background, variants, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill={color}
      {...otherProps}
    >
      <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
        <g id="compact_crossover-Red">
          <g id="compact" fill-rule="evenodd" clip-rule="evenodd">
            <path
              fill={background}
              d="M32.433 22.738h-19.8c-.4 0-.7-.333-.666-.733l.233-2.667a.682.682 0 01.667-.6h16.966l2.6 4zm-.3 9.867c0-1.167.634-2.2 1.567-2.8H17.8l-2.5-3.034H7.033l-.333 3.1c-.533.167-.933.7-.933 1.3 0 .767.6 1.367 1.366 1.367h2.4a3.294 3.294 0 013.3-3.233c1.834 0 3.3 1.466 3.3 3.3v.066H32.2c-.067-.033-.067-.066-.067-.066zm8-2.8h3.334c.3 0 .5.233.533.533v.067a2.269 2.269 0 01-2.267 2.266H38.7v-.066c0-1.2-.633-2.234-1.567-2.8h3z"
            />
            <path
              id="wheel"
              d="M30.367 31.271c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4zm1.333-.033c0-1.467 1.2-2.667 2.667-2.667 1.466 0 2.7 1.2 2.666 2.667 0 1.467-1.2 2.667-2.666 2.667a2.674 2.674 0 01-2.667-2.667zm.7-.067c0 1.1.867 1.967 1.967 1.967a1.95 1.95 0 001.966-1.967 1.95 1.95 0 00-1.966-1.966A1.95 1.95 0 0032.4 31.17zm1.333 0c0-.333.3-.633.634-.633.366 0 .633.3.633.633 0 .334-.3.634-.633.634a.656.656 0 01-.634-.634z"
            />
            <path
              id="wheel_2"
              d="M7.733 31.271c0 2.2 1.8 4 4 4 2.234 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4zm1.334-.033c0-1.467 1.2-2.667 2.666-2.667 1.5 0 2.7 1.2 2.667 2.667 0 1.467-1.2 2.667-2.667 2.667a2.675 2.675 0 01-2.666-2.667zm.7-.067c0 1.1.866 1.967 1.966 1.967a1.95 1.95 0 001.967-1.967 1.95 1.95 0 00-1.967-1.966 1.95 1.95 0 00-1.966 1.966zm1.333 0c0-.333.3-.633.633-.633.367 0 .634.3.634.633 0 .334-.3.634-.634.634a.656.656 0 01-.633-.634z"
            />
            <path
              id="frame"
              d="M24.733 11.238a.667.667 0 010 1.333h-.889a.225.225 0 00-.21.305.667.667 0 11-1.245.475l-.226-.591c-.039-.102-.127-.189-.236-.189H11.855c-.118 0-.212.095-.254.206l-.226.591a.667.667 0 01-1.246-.475.237.237 0 00-.221-.322h-.875a.667.667 0 110-1.333h15.7zM5.043 28.091l1.19-11.653A2.275 2.275 0 018.5 14.405h17.867c.766 0 1.466.366 1.9 1l3.533 5.533 7.533 1.333a3.714 3.714 0 013.067 3.134v.033l.188 2.444a1.184 1.184 0 011.012 1.156v.067c-.033 1.6-1.333 2.933-2.933 2.933h-2.634v-1.333h2.634c.866 0 1.566-.667 1.6-1.5h-2.5a.667.667 0 010-1.334h1.478l-.072-.937a.67.67 0 01-.073.004H39a1.935 1.935 0 01-1.933-1.933c0-.35.283-.634.633-.634h.067c.35 0 .633.284.633.634 0 .333.267.6.6.6h2.07l-.003-.034a2.407 2.407 0 00-1.967-2L31 22.138l-.021-.033H11.6c-.367 0-.733-.167-1-.434-.267-.266-.367-.633-.333-1.033l.233-2.667c.067-.7.633-1.2 1.333-1.2h9.134a.667.667 0 010 1.334h-.5v2.666h9.665l-2.965-4.666a.978.978 0 00-.767-.4H8.5c-.5 0-.9.366-.933.833l-.843 8.267h7.37c.278 0 .542.124.72.34l1.94 2.353c.177.215.44.34.72.34h11.893a.667.667 0 110 1.333H16.87a.933.933 0 01-.716-.335l-1.974-2.363a.933.933 0 00-.716-.335H6.587l-.173 1.7h.718a.667.667 0 010 1.333h-1.1c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h1.7a.667.667 0 010 1.334h-1.7A2.02 2.02 0 014 29.87a2.02 2.02 0 011.042-1.78zm7.02-9.986h7.07v2.666h-7.26a.25.25 0 01-.25-.271l.19-2.167a.25.25 0 01.25-.228zm18.67 12.6H15.1v1.333h15.633v-1.333zm-5.4-13.267a.667.667 0 11-1.333 0 .667.667 0 011.333 0zm-4.866 6.233v2.667a.667.667 0 01-1.334 0v-2.667a.667.667 0 011.334 0z"
            />
            <path
              id="street"
              d="M40.7 36.176a.667.667 0 110-1.333.667.667 0 010 1.333zM6.6 34.843h30.8a.667.667 0 010 1.333H6.6a.667.667 0 010-1.333z"
            />
          </g>
        </g>
      </svg>
    </svg>
  );
};

SuvCompactCrossoverRed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  variants: PropTypes.object
};

SuvCompactCrossoverRed.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default SuvCompactCrossoverRed;
