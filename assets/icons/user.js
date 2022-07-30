import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const UserIcon = ({
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
      <Circle cx="12" cy="7" r="4" />
      <Path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </Svg>
  );
};

export default UserIcon;
