import React from 'react';
import Svg, {Path, Polygon, Polyline} from 'react-native-svg';

const ArrowRight = ({width = 44, height = 44, stroke = '#000'}) => {
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
      <Polyline points="9 6 15 12 9 18" />
    </Svg>
  );
};

export default ArrowRight;
