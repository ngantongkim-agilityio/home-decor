import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SearchIcon = ({
  width = 17,
  height = 17,
  color = '#4B4544',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.896 11.896 3.714 3.714m-1.842-8.226A6.384 6.384 0 1 1 1 7.384a6.384 6.384 0 0 1 12.768 0Z"
    />
  </Svg>
);

export default memo(SearchIcon);
