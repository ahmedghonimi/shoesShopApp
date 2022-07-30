import React from 'react';
import Svg, {Circle, Line, Path} from 'react-native-svg';

const SearchIcon = ({width = 44, height = 44, stroke = '#000'}) => {
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
      <Circle cx="10" cy="10" r="7" />
      <Line x1="21" y1="21" x2="15" y2="15" />
    </Svg>
  );
};

export default SearchIcon;
