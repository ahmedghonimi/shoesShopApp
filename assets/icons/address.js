import React from 'react';
import Svg, {Line, Path} from 'react-native-svg';
const AdressIcon = ({width = 44, height = 44, stroke = '#000'}) => {
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
      <Path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <Path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <Line x1="3" y1="6" x2="3" y2="19" />
      <Line x1="12" y1="6" x2="12" y2="19" />
      <Line x1="21" y1="6" x2="21" y2="19" />
    </Svg>
  );
};

export default AdressIcon;
