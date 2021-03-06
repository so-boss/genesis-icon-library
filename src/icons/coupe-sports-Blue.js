import React from 'react';
import PropTypes from 'prop-types';

const CoupeSportsBlue = props => {
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
        <g id="sports-Blue">
          <g id="sports">
            <path
              fill={background}
              d="M42.713 24.585l-.73-.348a19.41 19.41 0 00-6.192-1.913l-5.356-.73-.07-.035c-.035-.035-.07-.035-.07-.07l-.034.174-1.148.73L18.4 21.56l-2.435-1.983s-8.522 2.992-8.522 3.027c-.486.8-.66 1.773-.521 2.713l.521 3.339h2.748l1.496-.035a2.94 2.94 0 012.817-3.722 2.94 2.94 0 012.922 2.922c0 .243-.035.487-.104.696l1.808-.035h14.018l1.67.104a2.896 2.896 0 01-.105-.765 2.94 2.94 0 012.922-2.922 2.94 2.94 0 012.922 2.922c0 .383-.07.765-.21 1.113l1.253.07 2.122-.383v-2.574c-.14-.626-.487-1.183-1.009-1.46z"
            />
            <path
              id="street"
              d="M42.052 30.003H4.974a.696.696 0 100 1.39h37.078a.696.696 0 000-1.39z"
            />
            <path
              id="wheel"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.704 26.776c0 1.983 1.635 3.618 3.618 3.618 1.982 0 3.617-1.6 3.617-3.617 0-1.983-1.635-3.618-3.617-3.618-1.983 0-3.618 1.635-3.618 3.617zm1.392.035a2.242 2.242 0 012.226-2.226 2.22 2.22 0 012.226 2.226 2.242 2.242 0 01-2.226 2.226 2.242 2.242 0 01-2.226-2.226zm2.226 1.009a1.084 1.084 0 01-1.079-1.078c0-.592.487-1.079 1.079-1.079.591 0 1.078.487 1.078 1.079 0 .591-.487 1.078-1.078 1.078z"
            />
            <path
              id="wheel_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.8 26.776c0 1.983 1.635 3.618 3.617 3.618 2.018 0 3.618-1.6 3.618-3.617 0-1.983-1.635-3.618-3.618-3.618-1.982 0-3.617 1.635-3.617 3.617zm1.391.035a2.242 2.242 0 012.226-2.226c1.253 0 2.227.974 2.227 2.226a2.242 2.242 0 01-2.227 2.226 2.242 2.242 0 01-2.226-2.226zm3.305-.07a1.078 1.078 0 11-2.157 0 1.078 1.078 0 012.157 0z"
            />
            <path
              id="frame"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.366 27.979a.693.693 0 00.798.56l1.041-.178c.535-.092.925-.555.925-1.097v-2.227c0-.87-.486-1.67-1.252-2.052l-.73-.348a20.949 20.949 0 00-6.435-1.982l-4.918-.66a1.153 1.153 0 01-.486-.186 16.721 16.721 0 00-14.805-1.867l-4.278 1.495c-1.57.548-2.59.904-3.26 1.146l-.014-.937h.318a.696.696 0 100-1.391H5.252a.696.696 0 000 1.391h.308v.014l.02 1.217a.693.693 0 00.07.292c-.02.024-.034.05-.05.077a4.788 4.788 0 00-.591 3.165l.476 2.993c.086.54.552.938 1.1.938h1.693a.696.696 0 000-1.392h-1.03a.5.5 0 01-.495-.424L6.4 24.203a3.523 3.523 0 01.143-1.645c.091-.269.317-.462.584-.557.922-.33 2.704-.957 4.558-1.609l2.992-1.052 1.85 1.485a2 2 0 001.097.434l9.888.77a2 2 0 001.223-.303l.637-.402 5.202.687c2.087.279 4.104.905 5.983 1.844l.73.348c.313.139.487.452.487.8v1.6a.5.5 0 01-.41.492l-.44.08a.693.693 0 00-.558.803zm-22.956-8.22l-1.14-.917a15.326 15.326 0 0111.687 1.73.5.5 0 01-.296.07l-9.977-.775a.5.5 0 01-.274-.109zm1.233 7.017h12.592a.696.696 0 110 1.392H18.644a.696.696 0 010-1.392zm8.723-.873a.684.684 0 00.152-1.36l-8.879-.994a1.114 1.114 0 01-.651-.307l-1.554-1.508a.7.7 0 10-.972 1.006l1.9 1.826c.177.17.405.277.649.304l9.355 1.033z"
            />
          </g>
        </g>
      </svg>
    </svg>
  );
};

CoupeSportsBlue.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  variants: PropTypes.object
};

CoupeSportsBlue.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default CoupeSportsBlue;
