import { memo } from 'react';

import Svg, { Path } from 'react-native-svg';

const BackIcon = () => (
  <Svg width={20} height={20} fill="none">
    <Path
      stroke="#242424"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.25 3.5 6.75 10l6.5 6.5"
    />
  </Svg>
);

export default memo(BackIcon);
