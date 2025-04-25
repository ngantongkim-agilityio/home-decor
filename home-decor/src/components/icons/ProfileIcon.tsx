import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ProfileIcon = ({
  width = 20,
  height = 23,
  color = '#F4B5A4',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={1.911}
      d="M1.826 22.138v-.645a8.537 8.537 0 1 1 17.075 0v.645M14.429 5.933a4.066 4.066 0 1 1-8.131 0 4.066 4.066 0 0 1 8.131 0Z"
    />
  </Svg>
);

export default memo(ProfileIcon);
