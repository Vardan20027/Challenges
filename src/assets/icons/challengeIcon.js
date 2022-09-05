import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Sizes} from '../RootStyle';

function SvgComponent(props) {
  const {iconColor} = props;
  return (
    <Svg
      width={Sizes.size32}
      height={Sizes.size32}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}>
      <G fill={'#a3acbe'} fillRule="evenodd">
        <G transform="translate(-429 -93) translate(427 91) rotate(45 9 24.864)">
          <Path d="M4.916.777a.5.5 0 00-.832-.554l-2 3a.5.5 0 00.832.554l2-3zM6 11.206a.5.5 0 001 0V3.5a.5.5 0 00-1 0v7.706z" />
          <Path d="M3 15.288a.5.5 0 10-1 0V18.5a.5.5 0 101 0v-3.212zM3 3.5a.5.5 0 00-1 0v7.568a.5.5 0 101 0V3.5zm3.084.277a.5.5 0 00.832-.554l-2-3a.5.5 0 00-.832.554l2 3zM6 18.5a.5.5 0 101 0v-3.135a.5.5 0 10-1 0V18.5z" />
          <Path d="M1.497 19h6.006c.276 0 .497.221.497.5 0 .274-.227.5-.497.5H1.497A.496.496 0 011 19.5c0-.274.227-.5.497-.5zm0 2h6.006C8.325 21 9 20.326 9 19.5c0-.83-.669-1.5-1.497-1.5H1.497C.675 18 0 18.674 0 19.5c0 .83.669 1.5 1.497 1.5z" />
          <Path d="M3 23.5L4 23.5 4 20.5 3 20.5z" />
          <Path d="M6 20.5L5 20.5 5 23.5 6 23.5z" />
          <Path d="M7 25.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-4 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM4 11.283a.5.5 0 101 0V5.5a.5.5 0 00-1 0v5.783zM4 18.5a.5.5 0 101 0v-3.17a.5.5 0 10-1 0v3.17z" />
        </G>
        <G transform="translate(-429 -93) translate(427 91) scale(-1 1) rotate(45 -5 -8.935)">
          <Path d="M4.916.777a.5.5 0 00-.832-.554l-2 3a.5.5 0 00.832.554l2-3zM6 18.5a.5.5 0 101 0v-15a.5.5 0 00-1 0v15z" />
          <Path d="M3 3.5a.5.5 0 00-1 0v15a.5.5 0 101 0v-15zm3.084.277a.5.5 0 00.832-.554l-2-3a.5.5 0 00-.832.554l2 3z" />
          <Path d="M1.497 19h6.006c.276 0 .497.221.497.5 0 .274-.227.5-.497.5H1.497A.496.496 0 011 19.5c0-.274.227-.5.497-.5zm0 2h6.006C8.325 21 9 20.326 9 19.5c0-.83-.669-1.5-1.497-1.5H1.497C.675 18 0 18.674 0 19.5c0 .83.669 1.5 1.497 1.5z" />
          <Path d="M3 23.5L4 23.5 4 20.5 3 20.5z" />
          <Path d="M6 20.5L5 20.5 5 23.5 6 23.5z" />
          <Path d="M7 25.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-4 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM4 18.5a.5.5 0 101 0v-13a.5.5 0 00-1 0v13z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
