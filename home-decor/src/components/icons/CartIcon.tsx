import Svg, { SvgProps, Path } from 'react-native-svg';

const CartIcon = ({
  width = 25,
  height = 25,
  color = '#F4B5A4',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={1.911}
      d="M4.33 6.184h18.708a.511.511 0 0 1 .502.617l-1.83 8.738a.511.511 0 0 1-.478.406H6.81m-2.478-9.76 2.44 9.76h.038m-2.478-9.76-.904-3.617a.917.917 0 0 0-.89-.693H.628m6.182 14.07v2.264A1.367 1.367 0 0 0 8.18 19.58h13.726"
    />
    <Path
      fill={color}
      d="M7.61 24.12a1.505 1.505 0 1 0 0-3.01 1.505 1.505 0 0 0 0 3.01ZM18.393 24.12a1.505 1.505 0 1 0 0-3.01 1.505 1.505 0 0 0 0 3.01Z"
    />
  </Svg>
);

export default CartIcon;
