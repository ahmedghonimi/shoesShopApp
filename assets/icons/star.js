import React from 'react';
import Svg, {Path} from 'react-native-svg';
const StarIcon = () => {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#FFD700"
      fill="#FFD700"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </Svg>
  );
};

export default StarIcon;
