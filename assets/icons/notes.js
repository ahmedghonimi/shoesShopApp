import React from 'react';
import Svg, {Line, Path, Rect} from 'react-native-svg';
const TermsIcon = ({width = 44, height = 44, stroke = '#000'}) => {
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
      <Rect x="5" y="3" width="14" height="18" rx="2" />
      <Line x1="9" y1="7" x2="15" y2="7" />
      <Line x1="9" y1="11" x2="15" y2="11" />
      <Line x1="9" y1="15" x2="13" y2="15" />
    </Svg>
  );
};

export default TermsIcon;
