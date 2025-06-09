import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LargeProfileIcon = ({
  width = 30,
  height = 35,
  color = '#4B4544',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={2.5}
      d="M2 34.961v-1.05c0-3.691 1.37-7.23 3.808-9.84 2.438-2.61 5.744-4.076 9.192-4.076 3.448 0 6.754 1.466 9.192 4.076C26.63 26.68 28 30.22 28 33.91v1.05M21.19 8.548c0 3.66-2.77 6.627-6.19 6.627-3.42 0-6.19-2.967-6.19-6.627 0-3.66 2.77-6.626 6.19-6.626 3.42 0 6.19 2.967 6.19 6.626Z"
    />
  </Svg>
);

export default memo(LargeProfileIcon);
