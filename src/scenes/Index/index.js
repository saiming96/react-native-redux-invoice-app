import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles.js';

import IconPlus from "../../assets/svg/icon-plus.tsx";

import List from '../../components/List';
import ListEmpty from '../../components/ListEmpty';

const Index = props => {
  const list = itemData => {
    return(
      <List 
        keyExtractor={(item) => item.id}
        id={itemData.item.id}
        itemData={itemData.item}
        navigation={props.navigation}
      />
    )
  }

  return (
    <View style={ styles.screen }>
      <View style={ styles.headerContainer }>
        <View style={ styles.headerLeftContainer }>
          <View>
            <Text style={ styles.headerLeftTitle }>Invoices</Text>
          </View>
          <View>
            <Text style={ styles.headerLeftDescription }
            >7 invoices</Text>
          </View>
        </View>

        <View style={ styles.headerRightContainer }>
          {/* filter */}
          <View style={ styles.headerRightFilterContainer }>

          </View>
          <View style={ styles.headerRightButtonContainer }>
            <TouchableOpacity 
              onPress={()=>props.navigation.navigate("Create")}
              style={ styles.headerRightButton }
            >
              <View style={ styles.headerRightButtonIconContainer }>
                <IconPlus />
              </View>
              <View style={ styles.headerRightButtonTextContainer }>
                <Text style={ styles.headerRightButtonText }>New</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
        data={props.invoice}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty />
        }
        renderItem={list}
      >
      </FlatList>
    </View>
  )
};

function mapStateToProps(state) {
  return {
    invoice: state.invoice
  }
}

export default connect(mapStateToProps)(Index);
