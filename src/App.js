import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import CreateComponent from './Pages/CreateComponent';
import StylingSimple from './Pages/StylingSimple';
import FlexBox from './Pages/FlexBox';
import Position from './Pages/Position';

const app = () => {
  const [siap,setSiap] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
    setSiap(false)
    },6000);
    return()=>{
      console.log('Component DiDelete')
    }
  },[])
  
  return (
    <View>
        {/* <CreateComponent /> */}
        {/* <StylingSimple /> */}
      { siap && <FlexBox />}
      {/* <Position/> */}
      </View>
  );
};

export default app;
