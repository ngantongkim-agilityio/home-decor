import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HomeIcon = ({
  width = 26,
  height = 25,
  color = '#F4B5A4',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={1.911}
      d="M1 12.305 12.805 2l11.8 10.305m-10.93 11.07h7.123v-10.87l-7.993-6.984-7.997 6.985v10.869h6.12V16.6h3.75"
    />
  </Svg>
);

export default memo(HomeIcon);
