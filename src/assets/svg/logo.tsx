import * as React from "react";
import Svg, { Path } from 'react-native-svg';

const Logo = () => {
  return (
    <Svg 
      width={32} 
      height={28}
      fill="none"
      stroke='white'
      style={{
          position: 'absolute',
          top: -15,
          left: 25,
      }}
    >
      <Path
        fill="#FFF"
        fillRule="evenodd"
        d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
      />
    </Svg>
    )
}

export default Logo
