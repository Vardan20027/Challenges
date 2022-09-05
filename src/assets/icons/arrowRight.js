import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function SvgComponent(props) {
  return (
    <Svg
      width={Sizes.size24}
      height={Sizes.size24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.47 5.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 010-1.06z"
        fill={'#a3aab9'}
      />
    </Svg>
  );
}

export default SvgComponent;
