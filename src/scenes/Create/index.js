import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import styles from './styles.js';
import moment from '../../utils/moment';
import reference from '../../utils/reference';

import ItemList from '../../components/ItemList';
import BackButton from '../../components/BackButton';
import CustomDatePicker from '../../components/CustomDatePicker';
import CustomSelectPicker from '../../components/CustomSelectPicker';



const Index = props => {
  const navigation = useNavigation();
  const paymentTerms = reference.getPaymentTerms();
  function generateId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 2; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text+=Math.floor(Math.random() * (9999-1000) + 1000);
  }
  
  const [data, setData] = useState({
    id: generateId(),
    createdAt: moment.getFullDateYMD(moment.now()),
    paymentDue: moment.getFullDateYMD(moment.now()),
    description: '',
    paymentTerms: paymentTerms[0],
    clientName: '',
    clientEmail: '',
    status: 'draft',
    total: 0,
  });

  const [senderAddress, setSenderAddress] = useState({
    street: '',
    city: '',
    postCode: '',
    country: ''
  });

  const [clientAddress, setClientAddress] = useState({
    street: '',
    city: '',
    postCode: '',
    country: ''
  });

  const [items, setItems] = useState(
    [
      {
        name: '',
        quantity: '',
        price: '',
        total: '',
      }
    ]
  );

  handleChange = ({input, type}) => {
    setData((data) => ({ ...data, [type]: input }));
  }

  handleChangeSenderAddress = ({input, type}) => {
    setSenderAddress((data) => ({ ...data, [type]: input }));
  }

  handleChangeClientAddress = ({input, type}) => {
    setClientAddress((data) => ({ ...data, [type]: input }));
  }

  handleItemChange =({input}) => {
    setItems(input)
  }

  useEffect(() => {
    let total = 0;
    items.map((item) => {
      if (item.total) {
        total += parseFloat(item.total)
      }
    });
    
    handleChange({input: total, type: `total` })
  }, [items]);

  handleSaveAsDraft = () => {
    let sender_address = {senderAddress: senderAddress};
    let client_address = {clientAddress: clientAddress};
    let items_list = {items: items};

    const submitData = {...data,...sender_address,...client_address,...items_list};
    props.createInvoice(submitData);
    navigation.goBack();
  }

  handleSaveAndSend = () => {
    //need to validate
    //need to set status to pending
    let sender_address = {senderAddress: senderAddress};
    let client_address = {clientAddress: clientAddress};
    let items_list = {items: items};

    const submitData = {...data,...sender_address,...client_address,...items_list};
    props.createInvoice(submitData);
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
          <Text style={ styles.titleText }>New Invoice</Text>

          {/* Form */}
          <Text style={ styles.billFromText }>Bill From</Text>
          
          <Text style={ styles.label }>Street Address</Text>
          <TextInput
            autoCorrect={false} 
            style={ styles.textInput }
            onChangeText={(input) => handleChangeSenderAddress({input, type: `street` })}
          />

          <View style={ styles.rowContainer }>
            <View style={ styles.halfContainer }>
              <Text style={ styles.label }>City</Text>
              <TextInput 
                autoCorrect={false} 
                style={ styles.textInput }
                onChangeText={(input) => handleChangeSenderAddress({input, type: `city` })}
              />
            </View>
            <View style={ styles.halfContainer }>
              <Text style={ styles.label }>PostCode</Text>
              <TextInput 
                autoCorrect={false} 
                style={ styles.textInput }
                onChangeText={(input) => handleChangeSenderAddress({input, type: `postCode` })}
              />
            </View>
          </View>

          <Text style={ styles.label }>Country</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            onChangeText={(input) => handleChangeSenderAddress({input, type: `country` })}
          />

          <Text style={ styles.billFromText }>Bill To</Text>
          
          <Text style={ styles.label }>Client's Name</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            onChangeText={(input) => handleChange({input, type: `clientName` })}
          />

          <Text style={ styles.label }>Client's Email</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            onChangeText={(input) => handleChange({input, type: `clientEmail` })}
          />

          <Text style={ styles.label }>Street Address</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            onChangeText={(input) => handleChangeClientAddress({input, type: `street` })}
          />

          <View style={ styles.rowContainer }>
            <View style={ styles.halfContainer }>
              <Text style={ styles.label }>City</Text>
              <TextInput 
                autoCorrect={false} 
                style={ styles.textInput }
                onChangeText={(input) => handleChangeClientAddress({input, type: `city` })}
              />
            </View>
            <View style={ styles.halfContainer }>
              <Text style={ styles.label }>PostCode</Text>
              <TextInput 
                autoCorrect={false} 
                style={ styles.textInput }
                onChangeText={(input) => handleChangeClientAddress({input, type: `postCode` })}
              />
            </View>
          </View>

          <Text style={ styles.label }>Country</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            onChangeText={(input) => handleChangeClientAddress({input, type: `country` })}
          />

          <Text style={ styles.label }>Invoice Date</Text>
          <CustomDatePicker 
            defaultDate={moment.getFullDateYMD(data.paymentDue)}
            onDateChange={(input)=> handleChange({input, type: `paymentDue` })}
          />

          <Text style={ styles.label }>Payment Term</Text>
          <CustomSelectPicker 
            paymentTerms = {paymentTerms}
            onSelectChange={(input)=> handleChange({input, type: `paymentTerms` })}
          />

          <Text style={ styles.label }>Project Description</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            onChangeText={(input) => handleChange({input, type: `description` })}
          />
          <ItemList 
            items = { items }
            onItemsChange = {(input) => handleItemChange({input})}
          />
          
        </ScrollView>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity 
          style={ styles.buttonDiscard }
          onPress={()=>{navigation.goBack()}}
        >
          <Text style={ styles.textDiscard }>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ styles.buttonSaveDraft }
          onPress={()=>{this.handleSaveAsDraft()}}
        >
          <Text style={ styles.textSaveDraft }>Save as Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ styles.buttonSaveSend }
          onPress={()=>{this.handleSaveAndSend()}} 
        >
          <Text style={ styles.textSaveSend }>Save & Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

function mapStateToProps(state) {
  return {
    invoice: state.invoice
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createInvoice: (data) => dispatch({
      type:'CREATE_INVOICE',
      data: data,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);