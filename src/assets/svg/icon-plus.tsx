import * as React from "react";
import Svg, { Path } from 'react-native-svg';

const IconPlus = () => {
    return (
      <Svg 
        width={10} 
        height={10}
        fill="none"
        stroke='#7E88C3'
      >
        <Path
          d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
          fill="#7C5DFA"
        />
      </Svg>
    )
}

export default IconPlus
