import React from 'react';
import Svg, {Path} from 'react-native-svg';
const HomeIcon = ({
  width = 44,
  height = 44,
  stroke = '#000',
  fill = 'none',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke={stroke}
      fill={fill}
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
      <Path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
    </Svg>
  );
};

export default HomeIcon;
