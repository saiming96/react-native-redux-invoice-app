import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import styles from './styles.js';
import StatusBar from '../../components/StatusBar';
import BackButton from '../../components/BackButton';
import ModalDelete from '../../components/ModalDelete';


const Index = props => {
  /* 2. Get the param */
  const navigation = useNavigation();
  const { data } = props.route.params;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const {
    id,
    createdAt,
    paymentDue,
    description,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  } = data;
  
  const handleDelete = () => {
    setShowDeleteModal(false);
    props.deleteInvoice(data);
    navigation.goBack();
  }

  const handleMarkAsPaid = () => {
    props.markAsPaid(data);
    navigation.goBack();
  }

  return (
    <View style={styles.screen}>
      <View style={styles.contentScreen}>
        <BackButton />
        <ScrollView 
          style={ styles.scrollView }
          showsVerticalScrollIndicator={false}
        >
          <View style={ styles.statusContainer }>
            <View style={ styles.statusTextContainer }>
              <Text style={ styles.statusText }>Status</Text>
            </View>
            <View style={ styles.statusBarContainer }>
              <StatusBar
                status={ status }
              />
            </View>
          </View>

          <View style={ styles.detailsContainer }>
            <Text style={ styles.textId }><Text style={ styles.textHashtag }>#</Text>{ id }</Text>
            <Text style={ styles.greyText }>{ description }</Text>

            <Text style={[styles.greyText, {marginTop:30}]}>
              { senderAddress.street }
            </Text>
            <Text style={ styles.greyText }>
              { senderAddress.city }
            </Text>
            <Text style={ styles.greyText }>
              { senderAddress.postCode }
            </Text>
            <Text style={ styles.greyText }>
              { senderAddress.country }
            </Text>
            
            <View style={ styles.contentContainer }>
              <View style={ styles.halfWidth }>
                <Text style={ styles.greyText }>Invoice Date</Text>
                <Text style={{...styles.blackBoldText, ...styles.marginTop12}}>{ createdAt }</Text>
                <Text style={{...styles.greyText, ...styles.marginTop32}}>Payment Due</Text>
                <Text style={{...styles.blackBoldText, ...styles.marginTop12}}>{ paymentDue }</Text>
              </View>

              <View style={ styles.halfWidth }>
                <Text style={ styles.greyText }>Bill To</Text>
                <Text style={{...styles.blackBoldText, ...styles.marginTop12}}>{ clientName }</Text>

                <Text style={{...styles.greyText, ...styles.marginTop8}}>{ clientAddress.street }</Text>
                <Text style={{...styles.greyText, ...styles.marginTop8}}>{ clientAddress.city }</Text>
                <Text style={{...styles.greyText, ...styles.marginTop8}}>{ clientAddress.postCode }</Text>
                <Text style={{...styles.greyText, ...styles.marginTop8}}>{ clientAddress.country }</Text>
              </View>
            </View>

            <View style={ styles.containerSentTo }>
              <Text style={ styles.greyText }>Sent To</Text>
              <Text style={{...styles.blackBoldText, ...styles.marginTop12}}>{ clientEmail }</Text>
            </View>

            <View
              style={ styles.itemContainer }>
                {items.map((data, key) => {
                  return (
                    <View key={key} style={ styles.itemInnerContainer }>
                      <View style={ styles.halfWidth }>
                        <Text style={ styles.blackBoldTextsm }>{data.name}</Text>
                        <Text style={ styles.greyText }>{data.quantity} x £{data.price}</Text>
                      </View>

                      <View style={ styles.totalContainer }>
                        <Text style={ styles.blackBoldTextsm }>£ {parseFloat(data.total).toFixed(2)}</Text>
                      </View>
                      
                    </View>
                  );
                })}
            </View>
            <View style={ styles.grandTotalContainer }>
              <View style={ styles.grandTotalInnerContainer }>
                <Text style={ styles.whiteText }>Grand Total</Text>
              </View>
              
              <View style={ styles.grandTotalInnerContainer }>
                <Text style={ styles.whiteBoldText }>£ { total.toFixed(2) }</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity 
          style={ styles.buttonEdit }
          onPress={()=>navigation.navigate("Edit",{
            invoice: data,
          })}
        >
          <Text style={ styles.textEdit }>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ styles.buttonDelete }
          onPress={()=>{setShowDeleteModal(true)}}
        >
          <Text style={ styles.textDelete }>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ styles.buttonMarkPaid }
          onPress={handleMarkAsPaid}
        >
          <Text style={ styles.textMarkPaid }>Mark As Paid</Text>
        </TouchableOpacity>
      </View>
      
      <ModalDelete 
        data={data}
        showDeleteModal={ showDeleteModal }
        onHideModal={()=>{setShowDeleteModal(false)}}
        onDeleteData={handleDelete}
      />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    invoice: state.invoice
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteInvoice: (data) => dispatch({
      type:'DELETE_INVOICE',
      data: data,
    }),
    markAsPaid: (data) => dispatch({
      type:'MARK_AS_PAID',
      data: data,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);