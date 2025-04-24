import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const OfficeIcon = ({
  width = 12,
  height = 41,
  color = '#DCBEB6',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M28.194 29.659H5.654m.668-6.113h21.204m-10.602-5.255v5.22m0 6.148v11.24m-5.34.029A5.38 5.38 0 0 1 12 38.82a5.353 5.353 0 0 1 4.918-3.267 5.34 5.34 0 0 1 5.34 5.347m4.201-22.61V7.05a5.424 5.424 0 0 0-5.424-5.417h-8.22A5.424 5.424 0 0 0 7.39 7.05v11.24h19.068Zm5.452 1.04a2.192 2.192 0 0 0-4.384 0V29.66h4.384V19.33Zm-25.588 0A2.192 2.192 0 0 0 4.13 17.14a2.19 2.19 0 0 0-2.22 2.192v10.328h4.384l.028-10.328Z"
    />
  </Svg>
);

export default memo(OfficeIcon);
