import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import NoItem from "../../assets/svg/no-item.tsx";

const Index = props => {
  return (
    <View style={ styles.screen }>
      <View style={ styles.svgContainer }>
        <NoItem />
      </View>
      <View style={ styles.textContainer }>
        <Text style={ styles.textTitle }>There is nothing here</Text>
        <Text style={ styles.textContentLineOne }>Create an invoice by clicking the</Text>
        <Text style={ styles.textContentLineTwo }><Text style={ styles.textBold }>New</Text> button and get started</Text>
      </View>
      
    </View>
  )
};

export default Index;