import React from 'react';
import PropTypes from 'prop-types';

const VehiclesMidsize = props => {
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
        d="M87.448 65.609a1.38 1.38 0 00-1.38-1.38H9.38a1.38 1.38 0 000 2.759h76.69a1.38 1.38 0 001.38-1.38z"
        fill="#4D5160"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.862 58.16c0 4.897 4 8.828 8.828 8.828a8.8 8.8 0 008.827-8.828 8.8 8.8 0 00-8.827-8.827c-4.897 0-8.828 4-8.828 8.827zm2.759 0c0-3.379 2.758-6.069 6.069-6.069 3.379 0 6.069 2.759 6.069 6.07 0 3.379-2.759 6.068-6.07 6.068-3.379 0-6.068-2.758-6.068-6.069zm1.93-.137a4.15 4.15 0 004.139 4.137c2.275 0 4.206-1.862 4.138-4.137a4.15 4.15 0 00-4.138-4.139 4.15 4.15 0 00-4.138 4.139zm2.76 0c0-.76.62-1.38 1.379-1.38.758 0 1.448.62 1.379 1.38 0 .758-.62 1.379-1.38 1.379-.758 0-1.379-.62-1.379-1.38z"
        fill="#4D5160"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60.483 58.16c0 4.897 4 8.828 8.827 8.828 4.828 0 8.828-3.931 8.828-8.828a8.8 8.8 0 00-8.828-8.827c-4.896 0-8.827 4-8.827 8.827zm2.758 0c0-3.379 2.759-6.069 6.07-6.069 3.31 0 6.068 2.759 6.068 6.07 0 3.379-2.69 6.068-6.069 6.068s-6.069-2.758-6.069-6.069zm1.931-.137a4.15 4.15 0 004.138 4.137 4.15 4.15 0 004.138-4.137 4.15 4.15 0 00-4.138-4.139 4.15 4.15 0 00-4.138 4.139zm2.759 0c0-.76.62-1.38 1.38-1.38.758 0 1.379.62 1.379 1.38 0 .758-.621 1.379-1.38 1.379-.758 0-1.379-.62-1.379-1.38z"
        fill="#4D5160"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.091 58.387l4.875 1.153.758-2.759-4.276-1.034V43.54c0-1.104.345-2.138 1.104-2.966l3.862-4.276c.896-.965 5.862-3.034 7.38-3.034l13.723-.414a38.62 38.62 0 0119.38 4.552l5.547 2.99-.306.32-40-2.345.024-.024c.531-.536.483-1.437-.07-1.951a1.346 1.346 0 00-1.902.075c-.43.463-.849.91-1.195 1.276a1.976 1.976 0 00-.413 2.062c.275.72.947 1.212 1.717 1.257l42.253 2.478 1.034-.483 1.357-1.357 13.747 2.667a6.658 6.658 0 014.784 3.518h-.991c-1.232 0-2.142-.553-2.903-1.336-.537-.551-1.394-.7-2.01-.239-.603.453-.74 1.314-.232 1.871 1.335 1.466 2.99 2.462 5.145 2.462h1.676l.117 3.862c0 .207-.138.345-.345.345l-7.172.483.138 2.758 7.172-.482c1.655-.07 2.965-1.518 2.897-3.173l-.138-4.62v-.138c-.621-4-3.656-7.242-7.656-8l-13.448-2.552-7.586-4.07c-6.345-3.447-13.517-5.102-20.759-4.896l-13.724.414c-2.138 0-7.862 2.345-9.38 4l-3.861 4.276c-1.173 1.31-1.862 2.965-1.862 4.759V56.44a2 2 0 001.54 1.947zm24.943-1.606h21.931a1.38 1.38 0 010 2.759h-21.93a1.38 1.38 0 010-2.759zm28.253-11.196l-26.817-.79a1.38 1.38 0 10-.081 2.757l26.817.79a1.38 1.38 0 10.081-2.757zm-34.942 1.713a1.38 1.38 0 10.069-2.758 1.38 1.38 0 00-.07 2.758z"
        fill="#4D5160"
      ></path>
    </svg>
  );
};

VehiclesMidsize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VehiclesMidsize.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default VehiclesMidsize;
