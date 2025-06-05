import { memo } from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const FacebookIcon = ({
  width = 33,
  height = 34,
  color = '#4B4544',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Circle cx={16.5} cy={17.383} r={16} stroke={color} />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.815 27.88v-5.886h3.042a.056.056 0 0 0 .056-.055v-3.76a.056.056 0 0 0-.056-.055h-3.039v-1.722c0-.305.122-.597.337-.813.215-.216.506-.338.81-.339h1.944v-3.495a.376.376 0 0 0-.364-.359h-2.884a3.827 3.827 0 0 0-2.712 1.128 3.859 3.859 0 0 0-1.124 2.723s-.039.56-.068 2.873h-2.95a.111.111 0 0 0-.112.112v3.647a.112.112 0 0 0 .111.112h2.928v5.596m.016.01a10.49 10.49 0 0 1-5.89-4.18 10.565 10.565 0 0 1 1.154-13.379 10.493 10.493 0 0 1 6.29-3.085 10.45 10.45 0 0 1 8.188 2.602 10.53 10.53 0 0 1 2.593 3.558A10.57 10.57 0 0 1 27 17.426a10.557 10.557 0 0 1-2.62 6.97 10.477 10.477 0 0 1-6.559 3.487"
    />
  </Svg>
);

export default memo(FacebookIcon);
