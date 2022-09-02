import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 511.999 511.999"
      xmlSpace="preserve"
      enableBackground="new 0 0 511.999 511.999"
      {...props}>
      <Circle cx={255.999} cy={255.999} r={255.999} fill={'#3275ff'} />
      <Path d="M243.999 119.999H267.999V392H243.999z" fill="#fff" />
      <Path d="M119.999 243.999H392V267.999H119.999z" fill="#fff" />
    </Svg>
  );
}

export default SvgComponent;
