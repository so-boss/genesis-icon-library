import React from 'react';
import PropTypes from 'prop-types';

const SportsStroke = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M84.383 60.005H9.67c-.615 0-1.113.498-1.113 1.113v.557c0 .614.498 1.113 1.113 1.113h74.713c.614 0 1.113-.499 1.113-1.113v-.557c0-.614-.499-1.113-1.113-1.113z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.409 53.553c0 3.965 3.27 7.235 7.234 7.235 3.966 0 7.235-3.2 7.235-7.235 0-3.965-3.27-7.235-7.235-7.235-3.965 0-7.234 3.27-7.234 7.235zm2.782.07c0-2.435 2.018-4.453 4.452-4.453a4.438 4.438 0 014.453 4.453c0 2.434-2.018 4.452-4.453 4.452-2.434 0-4.452-2.018-4.452-4.453zm4.452 2.017a2.167 2.167 0 01-2.156-2.157c0-1.182.974-2.156 2.156-2.156 1.183 0 2.157.974 2.157 2.156a2.167 2.167 0 01-2.157 2.157z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.6 53.553c0 3.965 3.27 7.235 7.235 7.235 4.035 0 7.235-3.2 7.235-7.235 0-3.965-3.27-7.235-7.235-7.235-3.965 0-7.235 3.27-7.235 7.235zm2.783.07c0-2.435 2.017-4.453 4.452-4.453 2.504 0 4.452 1.948 4.452 4.453 0 2.434-2.017 4.452-4.452 4.452s-4.452-2.018-4.452-4.453zm6.608-.14a2.157 2.157 0 11-4.313 0 2.157 2.157 0 014.313 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80.779 56.223c.108.601.68 1.003 1.283.9l3.273-.56c.535-.091.926-.554.926-1.097v-5.391c0-1.74-.974-3.34-2.504-4.105l-1.461-.695c-4.035-2.018-8.418-3.34-12.87-3.965l-10.1-1.356a1.136 1.136 0 01-.486-.187c-8.732-5.926-19.829-7.402-29.831-3.884l-8.557 2.992c-3.14 1.095-5.18 1.807-6.519 2.29l-.03-1.873h.914c.615 0 1.113-.498 1.113-1.113v-.556c0-.615-.498-1.113-1.113-1.113h-4.591c-.615 0-1.113.498-1.113 1.113v.556c0 .615.498 1.113 1.113 1.113h.894l.044 2.74c.002.138.03.269.077.39l-.041.07c-1.113 1.878-1.53 4.174-1.183 6.33l1.103 6.923c.086.54.552.938 1.1.938h4.615c.614 0 1.113-.498 1.113-1.113v-.556c0-.615-.499-1.113-1.113-1.113h-2.77a.5.5 0 01-.495-.425l-.77-5.07a7.002 7.002 0 01.442-3.703c.11-.263.33-.456.596-.552 1.68-.606 5.521-1.957 9.532-3.367h.003l.002-.001c2.036-.716 4.116-1.447 5.979-2.104l4.182 3.357a2 2 0 001.097.434l21.053 1.64a2 2 0 001.223-.303l1.835-1.159 10.404 1.374a37.96 37.96 0 0111.965 3.688l1.46.695c.627.278.975.904.975 1.6v3.618a.5.5 0 01-.41.492l-1.559.283a1.113 1.113 0 00-.896 1.291l.096.534zM34.94 39.613l-2.401-1.929c7.94-2.025 16.36-.763 23.375 3.46l-.122.077a.5.5 0 01-.305.076l-20.272-1.575a.5.5 0 01-.275-.11zm2.069 13.94h25.739c.614 0 1.113.498 1.113 1.113v.556c0 .615-.498 1.114-1.113 1.114h-25.74a1.113 1.113 0 01-1.112-1.114v-.556c0-.615.498-1.113 1.113-1.113zm17.973-1.72a1.113 1.113 0 001.227-.965l.064-.506a1.113 1.113 0 00-.98-1.248L36.9 47.056a1.114 1.114 0 01-.651-.307l-3.587-3.48a1.113 1.113 0 00-1.576.026l-.398.412a1.113 1.113 0 00.03 1.576l4.279 4.112c.176.17.405.277.649.304l19.336 2.134z"
      ></path>
    </svg>
  );
};

SportsStroke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SportsStroke.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default SportsStroke;
