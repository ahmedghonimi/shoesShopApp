import React from 'react';
import Svg, {Line, Path, Rect} from 'react-native-svg';
const VersionsIcon = ({width = 44, height = 44, stroke = '#000'}) => {
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
      <Rect x="10" y="5" width="10" height="14" rx="2" />
      <Line x1="7" y1="7" x2="7" y2="17" />
      <Line x1="4" y1="8" x2="4" y2="16" />
    </Svg>
  );
};

export default VersionsIcon;
