import React from 'react';
import PropTypes from 'prop-types';

const CoupeConvertibleDefault = props => {
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
        <g id="convertible-Default">
          <g id="convertible">
            <path
              id="street"
              d="M41.705 31.607H6.755a.656.656 0 100 1.311h34.95a.656.656 0 100-1.311z"
            />
            <path
              id="wheel"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.541 27.95a3.96 3.96 0 003.967 3.968c2.164 0 3.967-1.77 3.967-3.967a3.96 3.96 0 00-3.967-3.967 3.96 3.96 0 00-3.967 3.967zm1.311.034a2.666 2.666 0 012.656-2.656 2.666 2.666 0 012.656 2.656 2.666 2.666 0 01-2.656 2.655 2.645 2.645 0 01-2.655-2.655zm.755-.099c0 1.05.852 1.902 1.901 1.902 1.05 0 1.87-.853 1.902-1.902 0-1.049-.853-1.901-1.902-1.901s-1.901.852-1.901 1.901zm1.311.033c0-.328.262-.59.59-.59.328 0 .558.262.59.59 0 .328-.262.59-.59.59a.588.588 0 01-.59-.59z"
            />
            <path
              id="wheel_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.279 27.95a3.96 3.96 0 003.967 3.968c2.164 0 3.967-1.77 3.967-3.967a3.96 3.96 0 00-3.967-3.967 3.96 3.96 0 00-3.967 3.967zm1.311.034a2.666 2.666 0 012.656-2.656 2.666 2.666 0 012.656 2.656 2.666 2.666 0 01-2.656 2.655 2.645 2.645 0 01-2.656-2.655zm.754-.099c0 1.05.853 1.902 1.902 1.902 1.016 0 1.869-.853 1.902-1.902 0-1.049-.853-1.901-1.902-1.901-1.05 0-1.902.852-1.902 1.901zm1.312.033c0-.328.262-.59.59-.59.295 0 .557.262.59.59 0 .328-.262.59-.59.59a.588.588 0 01-.59-.59z"
            />
            <path
              id="frame"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.11 19.746a.64.64 0 01.235.336 44.534 44.534 0 018.622 2.721l.099.033c.557.23.885.754.885 1.344v2.951h.082a.705.705 0 010 1.41H38.95a.656.656 0 110-1.311h2.471a.25.25 0 00.25-.25v-1.175a.665.665 0 01-.137-.011l-.387-.073a5.649 5.649 0 01-2.132-.82l-.31-.184a.655.655 0 01.667-1.127l.332.197a4.503 4.503 0 001.672.623l.295.055v-.317a.19.19 0 00-.024-.094c-.032-.057-.099-.079-.161-.1l-.012-.003a44.812 44.812 0 00-11.114-3.115l-1.509-.098a1.985 1.985 0 01-1.606-1.017c-.393-.665-.256-1.526.308-2.015a125.654 125.654 0 00-2.193-1.284.538.538 0 01-.213-.759.74.74 0 011.015-.294c1.388.787 4.657 2.683 6.947 4.377zm-4.65-1.074a.569.569 0 00.21-.287 72.98 72.98 0 011.9 1.212l-.045-.007-1.574-.131a.805.805 0 01-.558-.36c-.098-.165-.065-.329.066-.427zM7.914 28.304a.66.66 0 10.535-1.209l-1.99-.882c-.591-.23-.952-.82-.952-1.443v-.031l1.223-.403a1.56 1.56 0 001.072-1.481v-.085c0-.814-.66-1.475-1.475-1.475h-.102a2.78 2.78 0 012.07-.918H24c.298 0 .596 0 .894.006a.679.679 0 00.697-.653.634.634 0 00-.615-.657c-.328-.007-.658-.007-.976-.007h-3.898l-2.364-2.427c-.23-.23-.558-.36-.886-.36h-.459c-.426 0-.82.23-1.049.59-.23.393-.262.82-.065 1.213l.475.984h-2.17l.743-.256a.656.656 0 00-.426-1.24l-3.752 1.288a.652.652 0 00-.297.208H8.295a4.1 4.1 0 00-4.098 4.098v1.606a2.91 2.91 0 001.737 2.656l1.981.878zm9.292-9.238l-.682-1.443h.328l1.405 1.443h-1.051zm-10.888 4.02l-.81.254v-.176c0-.191.018-.377.055-.557h.682a.246.246 0 01.073.48zm12.632 4.144h8.623a.656.656 0 110 1.311H18.95a.656.656 0 110-1.311zm.033-5.607h1.639a.656.656 0 110 1.311h-1.64a.656.656 0 010-1.311z"
            />
          </g>
        </g>
      </svg>
    </svg>
  );
};

CoupeConvertibleDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  variants: PropTypes.object
};

CoupeConvertibleDefault.defaultProps = {
  color: 'currentColor',
  size: '48'
};

export default CoupeConvertibleDefault;
