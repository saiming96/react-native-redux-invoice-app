import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from '../../utils/moment';

import styles from './styles';

import StatusBar from '../StatusBar';

const Index = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={()=>navigation.navigate("Show",{
        data: props.itemData,
      })}
      style={ styles.listContainer}
    >
      <View style={ styles.listInnerContainer }>
        <View>
          <Text style={ styles.idText }>
            <Text style ={ styles.idHashtagText }>#
            </Text>
            {props.itemData.id}
          </Text>

          <Text style={ styles.paymentDueText }>
            Due {moment.getShortDate(props.itemData.paymentDue)}
          </Text>

          <Text style={ styles.totalText }>
            £ {props.itemData.total.toFixed(2)}
          </Text>
        </View>
        <View style={ styles.listRightContainer }>
          <Text style={ styles.clientNameText }>{props.itemData.clientName}</Text>
          <StatusBar
						status={props.itemData.status}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default Index;