import React from 'react';
import PropTypes from 'prop-types';

const SuvMidsizeRed = props => {
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
        <g id="midsize-Red">
          <g id="midsize">
            <path
              fill={background}
              d="M33.38 21.39l-3.587-1.93a19.96 19.96 0 00-10.034-2.38l-5.655.173-2 2.275c-.656.725-1.483 1.587-1.483 1.587l21.758 1.276 1-1z"
            />
            <path
              id="street"
              d="M43.724 32.804a.69.69 0 00-.69-.69H4.69a.69.69 0 000 1.38h38.345a.69.69 0 00.69-.69z"
            />
            <path
              id="wheel"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.931 29.08c0 2.449 2 4.414 4.414 4.414a4.4 4.4 0 004.414-4.414 4.4 4.4 0 00-4.414-4.414c-2.448 0-4.414 2-4.414 4.414zm1.38 0c0-1.69 1.379-3.034 3.034-3.034 1.69 0 3.034 1.379 3.034 3.034 0 1.69-1.379 3.035-3.034 3.035A3.039 3.039 0 018.31 29.08zm.965-.069c0 1.138.93 2.07 2.069 2.07 1.138 0 2.103-.932 2.069-2.07a2.075 2.075 0 00-2.07-2.069 2.075 2.075 0 00-2.068 2.07zm1.38 0c0-.38.31-.69.689-.69.38 0 .724.31.69.69 0 .38-.31.69-.69.69-.38 0-.69-.31-.69-.69z"
            />
            <path
              id="wheel_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.241 29.08c0 2.449 2 4.414 4.414 4.414a4.422 4.422 0 004.414-4.414 4.4 4.4 0 00-4.414-4.414c-2.448 0-4.414 2-4.414 4.414zm1.38 0c0-1.69 1.379-3.034 3.034-3.034 1.655 0 3.035 1.379 3.035 3.034a3.017 3.017 0 01-3.035 3.035 3.039 3.039 0 01-3.034-3.035zm.965-.069c0 1.138.931 2.07 2.07 2.07a2.075 2.075 0 002.068-2.07 2.075 2.075 0 00-2.069-2.069 2.075 2.075 0 00-2.069 2.07zm1.38 0c0-.38.31-.69.69-.69.378 0 .689.31.689.69 0 .38-.31.69-.69.69-.38 0-.69-.31-.69-.69z"
            />
            <path
              id="frame"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.815 29.375l1.668.395.38-1.38-2.139-.517V21.77c0-.552.173-1.07.552-1.483l1.93-2.138c.45-.483 2.932-1.517 3.69-1.517l6.863-.207a19.31 19.31 0 019.69 2.276l2.773 1.495-.153.16-20-1.172.012-.012c.266-.268.242-.719-.035-.976a.673.673 0 00-.951.037c-.215.232-.424.455-.598.638a.988.988 0 00-.206 1.031.98.98 0 00.859.629l21.126 1.239.517-.242.679-.678 6.873 1.334a3.329 3.329 0 012.392 1.758h-.496c-.615 0-1.07-.276-1.451-.667-.268-.276-.697-.35-1.005-.12-.301.226-.37.657-.116.936.668.732 1.495 1.23 2.572 1.23h.838l.059 1.932c0 .103-.069.172-.172.172l-3.587.241.07 1.38 3.586-.242c.827-.034 1.482-.758 1.448-1.586l-.07-2.31v-.07c-.31-2-1.827-3.62-3.827-4l-6.724-1.275-3.793-2.035c-3.172-1.724-6.759-2.551-10.38-2.448l-6.861.207c-1.07 0-3.931 1.172-4.69 2l-1.931 2.138a3.552 3.552 0 00-.931 2.38v5.624a2 2 0 001.54 1.946zm11.702-.985h10.966a.69.69 0 010 1.38H17.517a.69.69 0 010-1.38zm14.127-5.597l-13.409-.396a.69.69 0 00-.04 1.379l13.408.395a.69.69 0 10.04-1.378zm-17.472.856a.69.69 0 10.035-1.38.69.69 0 00-.035 1.38z"
            />
          </g>
        </g>
      </svg>
    </svg>
  );
};

SuvMidsizeRed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  variants: PropTypes.object
};

SuvMidsizeRed.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default SuvMidsizeRed;
