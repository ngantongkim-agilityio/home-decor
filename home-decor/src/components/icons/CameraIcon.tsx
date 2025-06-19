import { memo } from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

const CameraIcon = ({
  width = 21,
  height = 18,
  color = '#4B4544',
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.556 3.475h3.983a1.472 1.472 0 0 1 1.033.424A1.45 1.45 0 0 1 20 4.924v10.627a1.44 1.44 0 0 1-.428 1.025 1.463 1.463 0 0 1-1.033.424H2.46c-.387 0-.759-.153-1.033-.424A1.444 1.444 0 0 1 1 15.55V4.924c0-.384.154-.753.428-1.025a1.467 1.467 0 0 1 1.033-.424h4.192c-.037-.087-.037-1.56-.037-1.56a.905.905 0 0 1 .57-.846A.926.926 0 0 1 7.538 1h6.134c.245 0 .48.096.653.268a.91.91 0 0 1 .27.647s-.017 1.473-.04 1.56Z"
    />
  </Svg>
);

export default memo(CameraIcon);
