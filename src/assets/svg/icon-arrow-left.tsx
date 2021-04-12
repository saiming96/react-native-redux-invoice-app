import * as React from "react";
import Svg, { Path } from 'react-native-svg';

const IconArrowLeft = () => {
    return (
        <Svg 
          width={20} 
          height={10}
          fill="none"
          stroke='#7E88C3'
          style={{
            justifyContent: 'center',
          }}
        >
          <Path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              strokeWidth={2}
              fill="none"
          />
        </Svg>
        
    )
}

export default IconArrowLeft
