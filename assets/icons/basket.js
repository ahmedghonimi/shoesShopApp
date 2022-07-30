import React from 'react';
import Svg, {Circle, Path, Polyline} from 'react-native-svg';

const BasketSVG = ({storke, fill, width, height}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke={storke}
      fill={fill}
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Polyline points="7 10 12 4 17 10" />
      <Path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z" />
      <Circle cx="12" cy="15" r="2" />
    </Svg>
  );
};

export default BasketSVG;
