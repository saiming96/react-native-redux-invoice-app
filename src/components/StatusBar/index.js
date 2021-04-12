import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import TextColors from '../../constant/textColors.js';
import BackgroundColors from '../../constant/backgroundColors.js';


const Index = props => {
  return (
    <View style={ [styles.statusContainer, { backgroundColor: BackgroundColors[props.status] }] }>
      <View style={ [styles.statusIndicator, { backgroundColor: TextColors[props.status]}] }></View>
      <Text style={ [styles.statusText, { color: TextColors[props.status]}] }>{props.status}</Text>
    </View>
  )
};

export default Index;