import React from 'react';
import PropTypes from 'prop-types';

const SedanSideLine = props => {
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
      <g
        clip-path="url(#clip0)"
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#4D5160"
      >
        <path d="M42.484 31.567a.703.703 0 110 1.406H7.502a.703.703 0 110-1.406h34.982zM4.7 31.602a.703.703 0 010 1.406.703.703 0 010-1.406z"></path>
        <path d="M9.143 27.713a4.236 4.236 0 004.234 4.255 4.236 4.236 0 004.234-4.255 4.236 4.236 0 00-4.234-4.254 4.236 4.236 0 00-4.234 4.255zm1.4.036a2.852 2.852 0 012.834-2.849 2.852 2.852 0 012.834 2.849 2.83 2.83 0 01-2.834 2.848 2.83 2.83 0 01-2.834-2.848zm.805-.106c0 1.125.91 2.04 2.029 2.04 1.12 0 2.03-.915 2.03-2.04s-.91-2.04-2.03-2.04c-1.12 0-2.03.915-2.03 2.04zm1.4.035a.629.629 0 111.259 0 .629.629 0 11-1.26 0z"></path>
        <path d="M30.486 27.713a4.236 4.236 0 004.234 4.255 4.236 4.236 0 004.234-4.255 4.236 4.236 0 00-4.234-4.254 4.236 4.236 0 00-4.233 4.255zm1.4.036A2.852 2.852 0 0134.72 24.9a2.83 2.83 0 012.834 2.849 2.852 2.852 0 01-2.834 2.848 2.83 2.83 0 01-2.834-2.848zm.805-.106c0 1.125.91 2.04 2.03 2.04 1.119 0 2.028-.915 2.028-2.04s-.91-2.04-2.029-2.04c-1.12 0-2.03.915-2.03 2.04zm1.4.035a.629.629 0 111.259 0 .629.629 0 11-1.26 0z"></path>
        <path d="M43.49 26.682a2 2 0 01-1.983 1.735h-1.115a.703.703 0 010-1.407h1.2a.5.5 0 00.497-.436l.084-.654c.105-.879-.525-1.3-.525-1.3l-.01-.007-2.51-.556c-.664-.141-1.259-.563-1.679-1.126l-.187-.266a.705.705 0 111.152-.812l.19.27c.21.28.49.492.84.562l1.07.238c-.714-.885-1.673-1.655-2.68-1.89l-7.348-1.935-4.863-2.426c-1.295-.738-3.569-1.196-6.053-1.196h-4.514c-1.47 0-3.603 1.548-4.863 3.025a6.056 6.056 0 01-1.714 1.441l-2.205 1.231c-.525.281-.84.88-.84 1.477v2.356c0 .837 1.015 1.65 2.036 1.915.356.092.659.387.659.755v.072c0 .357-.31.636-.665.598-1.715-.28-3.429-1.652-3.429-3.34V22.65c0-1.125.595-2.145 1.574-2.708l2.205-1.23c.49-.282.944-.668 1.33-1.126 1.469-1.758 3.953-3.516 5.912-3.516h4.514c1.295 0 4.549.14 6.753 1.371l4.723 2.321 7.138 1.864c1.96.492 3.604 2.285 4.409 3.903.49.422 1.12 1.266.98 2.532l-.084.62zm-25.95-6.67a.703.703 0 01-.7.704.703.703 0 010-1.407c.387 0 .7.317.7.704zm-2.798 0a.703.703 0 01-.704.704h-1.494a.98.98 0 01-.675-.27l-.542-.515a.683.683 0 01-.05-.938c1.19-1.442 3.255-2.883 4.9-2.883h3.428c1.05 0 3.709.105 5.493 1.125l3.395 1.677a.951.951 0 01-.421 1.804h-8.079a.703.703 0 110-1.407h6.155l-1.715-.844c-1.05-.597-2.834-.949-4.828-.949h-3.429c-.945 0-2.274.844-3.254 1.793H14.038c.389 0 .704.315.704.704zm14.096 6.998h-9.58a.703.703 0 000 1.407h9.58a.703.703 0 000-1.407z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="40"
            height="20.1"
            fill="#fff"
            transform="translate(4 14.07)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SedanSideLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SedanSideLine.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default SedanSideLine;
