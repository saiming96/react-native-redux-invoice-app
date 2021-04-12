import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import IconArrowLeft from "../../assets/svg/icon-arrow-left.tsx";

const Index = props => {
  const navigation = useNavigation();

  return (
    <View style={ styles.viewContainer }>
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={ styles.buttonContainer }
      >
      <View style={ styles.iconContainer }>
        <IconArrowLeft />
        </View>
        
        <View style={ styles.textContainer }>
        <Text style={ styles.textStyle }>Go back</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

export default Index;