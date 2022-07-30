import React from 'react';
import Svg, {Line, Path} from 'react-native-svg';

const ArrowNarrowLeft = ({width = 44, height = 44, stroke = '#000'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Line x1="5" y1="12" x2="19" y2="12" />
      <Line x1="5" y1="12" x2="9" y2="16" />
      <Line x1="5" y1="12" x2="9" y2="8" />
    </Svg>
  );
};

export default ArrowNarrowLeft;
