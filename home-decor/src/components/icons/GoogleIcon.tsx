import { memo } from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const GoogleIcon = ({
  width = 34,
  height = 34,
  color = '#4B4544',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Circle cx={17.311} cy={17.383} r={16} stroke={color} />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22.586 11.074a8.195 8.195 0 1 0 2.643 6.028h-8.195"
    />
  </Svg>
);

export default memo(GoogleIcon);
