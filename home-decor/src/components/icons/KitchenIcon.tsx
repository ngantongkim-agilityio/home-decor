import { memo } from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const KitchenIcon = ({
  width = 45,
  height = 43,
  color = '#DCBEB6',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M32.54 42V18.598H13.338V42m19.203 0H13.338m19.203 0H43.94V25.012h-11.4m0 16.988V25.012M13.338 42V25.012m0 16.988H1.94V25.012h11.4m0 0H32.54M21.117 0v4.887l-8.285 6.732a.07.07 0 0 0 .024.095.07.07 0 0 0 .035.01h20.142a.07.07 0 0 0 .068-.07.07.07 0 0 0-.01-.035l-8.225-6.732V0M13.338 29.876H1.94m42 0H32.541m-15.172-.682h11.14v8.87H17.37v-8.87Z"
    />
    <Circle cx={7.593} cy={33.112} r={0.808} fill={color} />
    <Circle cx={38.286} cy={33.112} r={0.808} fill={color} />
    <Circle
      cx={0.808}
      cy={0.808}
      r={0.808}
      fill={color}
      transform="matrix(1 0 0 -1 17.285 22.617)"
    />
    <Circle
      cx={0.808}
      cy={0.808}
      r={0.808}
      fill={color}
      transform="matrix(1 0 0 -1 26.979 22.617)"
    />
    <Circle
      cx={0.808}
      cy={0.808}
      r={0.808}
      fill={color}
      transform="matrix(1 0 0 -1 22.133 22.617)"
    />
  </Svg>
);

export default memo(KitchenIcon);
