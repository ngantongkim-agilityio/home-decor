import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LogoutIcon = ({
  width = 19,
  height = 24,
  color = '#4B4544',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.817 15.025v3.702c0 1.133.438 2.22 1.218 3.021A4.104 4.104 0 0 0 7.975 23h5.872c.546 0 1.086-.11 1.59-.325.505-.215.963-.53 1.349-.927s.691-.868.9-1.386A4.367 4.367 0 0 0 18 18.727V5.273c0-.561-.107-1.116-.315-1.634a4.279 4.279 0 0 0-.9-1.386 4.15 4.15 0 0 0-1.348-.927A4.06 4.06 0 0 0 13.847 1H7.976c-1.103 0-2.16.451-2.94 1.252a4.336 4.336 0 0 0-1.22 3.02v3.703M1 12h10.964m0 0L8.418 9.235M11.964 12l-3.546 2.765m6.646-9.52v13.51"
    />
  </Svg>
);

export default memo(LogoutIcon);
