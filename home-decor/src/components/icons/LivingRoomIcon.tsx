import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const LivingRoomIcon = ({
  width = 38,
  height = 36,
  color = '#DCBEB6',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M36.838 20.663v11.07H1v-11.07m7.65-.901h20.538M4.825 11.958V5.813a4.82 4.82 0 0 1 1.414-3.4A4.833 4.833 0 0 1 9.644 1h18.56a4.833 4.833 0 0 1 3.405 1.413 4.82 4.82 0 0 1 1.414 3.4v6.145m-3.835 13.651h7.65V14.876a2.917 2.917 0 0 0-2.923-2.918h-1.804a2.924 2.924 0 0 0-2.923 2.918V25.61Zm0 0H8.332m.318 6.124V35H4.384v-3.267m29.07 0V35h-4.266v-3.267M3.922 11.958h1.805a2.924 2.924 0 0 1 2.923 2.918V25.61H1V14.876a2.917 2.917 0 0 1 2.922-2.918Z"
    />
  </Svg>
);

export default memo(LivingRoomIcon);
