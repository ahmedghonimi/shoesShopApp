import React from 'react';
import Svg, {Line, Path, Rect} from 'react-native-svg';
const CreditCardIcon = ({width = 44, height = 44, stroke = '#000'}) => {
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
      <Rect x="3" y="5" width="18" height="14" rx="3" />
      <Line x1="3" y1="10" x2="21" y2="10" />
      <Line x1="7" y1="15" x2="7.01" y2="15" />
      <Line x1="11" y1="15" x2="13" y2="15" />
    </Svg>
  );
};

export default CreditCardIcon;
