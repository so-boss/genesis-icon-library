import React from 'react';
import PropTypes from 'prop-types';

const SuvCrossoverDefault = props => {
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
        <g id="crossover-Default">
          <g id="icon_crossover" fill-rule="evenodd" clip-rule="evenodd">
            <path
              id="street"
              d="M6.434 34.2h31.243a.676.676 0 010 1.353H6.434a.676.676 0 010-1.353zm34.59 0h.305a.676.676 0 010 1.353h-.304a.676.676 0 010-1.353z"
            />
            <path
              id="wheel"
              d="M30.88 29.82a4.07 4.07 0 004.058 4.057 4.048 4.048 0 004.058-4.058 4.07 4.07 0 00-4.058-4.057 4.07 4.07 0 00-4.057 4.057zm1.353-.035a2.713 2.713 0 012.705-2.705c1.522 0 2.74 1.218 2.705 2.705a2.713 2.713 0 01-2.705 2.705 2.713 2.713 0 01-2.705-2.705zm.71-.067c0 1.116.88 1.995 1.995 1.995 1.116 0 1.995-.88 1.995-1.995 0-1.116-.879-1.995-1.995-1.995s-1.995.879-1.995 1.995zm1.353 0c0-.338.304-.643.642-.643.372 0 .643.305.643.643a.665.665 0 01-.643.642.665.665 0 01-.642-.642z"
            />
            <path
              id="wheel_2"
              d="M7.956 29.82a4.07 4.07 0 004.058 4.057 4.07 4.07 0 004.057-4.058 4.07 4.07 0 00-4.058-4.057 4.07 4.07 0 00-4.057 4.057zm1.353-.035a2.713 2.713 0 012.705-2.705 2.713 2.713 0 012.705 2.705 2.713 2.713 0 01-2.705 2.705 2.713 2.713 0 01-2.705-2.705zm.71-.067c0 1.116.879 1.995 1.995 1.995 1.082 0 1.995-.88 1.995-1.995 0-1.116-.88-1.995-1.995-1.995-1.116 0-1.995.879-1.995 1.995zm1.352 0c0-.338.304-.643.643-.643.338 0 .642.305.642.643a.665.665 0 01-.643.642.665.665 0 01-.642-.642z"
            />
            <path
              id="frame"
              d="M33.282 17.036a.68.68 0 01-.914.304l-4.09-2.06a17.553 17.553 0 00-8.12-1.91.696.696 0 01-.706-.655.658.658 0 01.648-.697c3.051-.018 6.08.691 8.786 2.044l4.094 2.062a.68.68 0 01.302.912zM15.395 12.88a.677.677 0 101.352-.067.677.677 0 00-1.352.067zM40.73 29.465a.678.678 0 11-.16-1.346l.772-.09a1.468 1.468 0 001.29-1.308l.032-.306a.678.678 0 01-.075-.012l-2.817-.608a1.916 1.916 0 01-1.15-.743l-.915-1.23a.95.95 0 01.86-1.511l2.745.291a4.343 4.343 0 00-2.453-1.371l-5.452-1.032-1.856 1.229a2 2 0 01-1.252.327L10.66 20.3a.693.693 0 01-.641-.726c.101-1.725.405-2.029.54-2.13l.102-.068 2.15-1.357a9.013 9.013 0 00-3.536 1.357L7.38 18.627a4.349 4.349 0 00-1.703 2.114l.014.001 2.634.335a.669.669 0 01.577.762c-.129.898-.203 1.283-.266 1.478-.048.152-.124.303-.252.398-.231.17-.878.449-2.999 1.282v1.212c0 .54.286 1.04.75 1.314l.736.434a.671.671 0 01-.675 1.16l-1.192-.683A2 2 0 014 26.7v-4.352c0-1.962.98-3.754 2.604-4.836l1.893-1.25a10.676 10.676 0 015.207-1.691l6.053-.27c2.637-.136 5.308.439 7.675 1.656l5.257 2.677c.169.086.349.147.535.183l5.772 1.096c2.13.406 3.82 1.927 4.43 3.99l.457 1.51a2 2 0 01.076.783l-.135 1.324a2 2 0 01-1.748 1.783l-1.345.163zm-.653-4.954l2.378.512-.214-.75a4.51 4.51 0 00-.148-.42.678.678 0 01-.498.148l-1.636-.17a.279.279 0 00-.254.443.644.644 0 00.372.237zm-13.153-7.338l4.892 2.476a1.33 1.33 0 00-.093.056l-.519.343a1.97 1.97 0 01-1.232.322l-18.11-1.34c-.23-.017-.395-.255-.35-.48.02-.1.075-.156.162-.21l3.952-2.498 4.299-.19c2.4-.102 4.835.44 6.999 1.521zM5.386 22.347c0-.094.003-.188.009-.28.04.013.081.022.125.028l1.691.217c.145.018.25.172.226.315-.012.066-.056.108-.117.135a62.09 62.09 0 01-1.934.793v-1.208zm9.973 7.903l.058-1.352 15.843.677-.057 1.35-15.844-.675zm13.768-1.677a.678.678 0 00.058-1.353l-10.54-.461c-.714-.031-1.337-.459-1.78-1.02a6.206 6.206 0 00-5.78-2.279c-.37.056-.586.43-.493.792.094.366.468.58.844.536 1.96-.232 3.903.753 4.813 2.522.114.22.27.419.477.556.19.128.413.2.642.21l11.759.497z"
            />
          </g>
        </g>
      </svg>
    </svg>
  );
};

SuvCrossoverDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  variants: PropTypes.object
};

SuvCrossoverDefault.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default SuvCrossoverDefault;
