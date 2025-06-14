import { memo } from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const BackIcon = ({
  width = 22,
  height = 19,
  color = '#4B4544',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.29}
      d="M11.909 1 1 9.497m0 0L11.909 18M1 9.497h19.62"
    />
  </Svg>
);

export default memo(BackIcon);
