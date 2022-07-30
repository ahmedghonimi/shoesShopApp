import React from 'react';
import Svg, {Line, Path, Rect} from 'react-native-svg';
const BellIcon = ({width = 44, height = 44, stroke = '#000'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke={stroke}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
      <Path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    </Svg>
  );
};

export default BellIcon;
