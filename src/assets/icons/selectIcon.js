import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function SvgComponent(props) {
  return (
    <Svg
      width={Sizes.size20}
      height={Sizes.size20}
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      enableBackground="new 0 0 512 512"
      {...props}>
      <Circle cx={256} cy={256} r={256} fill={'#6dc180'} />
      <Path
        d="M256 0v512c141.385 0 256-114.615 256-256S397.385 0 256 0z"
        fill={'#5ca15d'}
      />
      <Path
        d="M219.429 367.932L108.606 257.108 147.394 218.32 219.429 290.353 355.463 154.32 394.251 193.108z"
        fill={'#f2f2f4'}
      />
      <Path
        d="M256 331.361L394.251 193.108 355.463 154.32 256 253.782z"
        fill={'#dfdfe1'}
      />
    </Svg>
  );
}

export default SvgComponent;
