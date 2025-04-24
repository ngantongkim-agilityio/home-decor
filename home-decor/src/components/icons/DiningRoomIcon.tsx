import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const DiningRoomIcon = ({
  width = 45,
  height = 29,
  color = '#DCBEB6',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M1.97 14.892V0m0 14.892V29m0-14.108h12.998V29M1.971 19.176h13.004m28.536-4.284V0m0 14.892V29m0-14.108H30.507V29m13.004-9.839H30.507m-7.946-8.849V29M10.37 6.03h24.493v4.282H10.371V6.03Z"
    />
  </Svg>
);

export default memo(DiningRoomIcon);
