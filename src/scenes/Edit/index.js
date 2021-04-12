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
  const { invoice } = props.route.params;
  const paymentTerms = reference.getPaymentTerms();
  
  const [data, setData] = useState({
    id: invoice.id,
    createdAt: moment.getFullDateYMD(moment.now()),
    paymentDue: moment.getFullDateYMD(moment.now()),
    description: invoice.description,
    paymentTerms: paymentTerms[0],
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    status: invoice.status,
    total: invoice.total,
  });

  const [sAddress, setSAddress] = useState(invoice.senderAddress);

  const [cAddress, setCAddress] = useState(invoice.clientAddress);

  const [items, setItems] = useState(invoice.items);

  handleChange = ({input, type}) => {
    setData((data) => ({ ...data, [type]: input }));
  }

  handleChangeSenderAddress = ({input, type}) => {
    setSAddress((data) => ({ ...data, [type]: input }));
  }

  handleChangeClientAddress = ({input, type}) => {
    setCAddress((data) => ({ ...data, [type]: input }));
  }

  handleItemChange =({input}) => {
    setItems(input)
  }

  handleSaveChanges = () => {
    //need to validate
    //need to set status to pending
    let sender_address = {senderAddress: sAddress};
    let client_address = {clientAddress: cAddress};
    let items_list = {items: items};

    const submitData = {...data,...sender_address,...client_address,...items_list};
    props.editInvoice(submitData);
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
          <Text style={ styles.titleText }>Edit 
          <Text style={ styles.textGray }> #</Text>{invoice.id}</Text>

          {/* Form */}
          <Text style={ styles.billFromText }>Bill From</Text>
          
          <Text style={ styles.label }>Street Address</Text>
          <TextInput 
            autoCorrect={false}
            value={ sAddress['street'] }
            style={ styles.textInput }
            onChangeText={(input) => handleChangeSenderAddress({input, type: `street` })}
          />

          <View style={ styles.rowContainer }>
            <View style={ styles.halfContainer }>
              <Text style={ styles.label }>City</Text>
              <TextInput 
                autoCorrect={false} 
                value={ sAddress['city'] }
                style={ styles.textInput }
                onChangeText={(input) => handleChangeSenderAddress({input, type: `city` })}
              />
            </View>
            <View style={ styles.halfContainer }>
              <Text style={ styles.label }>PostCode</Text>
              <TextInput 
                autoCorrect={false}
                value={ sAddress['postCode'] }
                style={ styles.textInput }
                onChangeText={(input) => handleChangeSenderAddress({input, type: `postCode` })}
              />
            </View>
          </View>

          <Text style={ styles.label }>Country</Text>
          <TextInput 
            autoCorrect={false} 
            value={ sAddress['country'] }
            style={ styles.textInput }
            onChangeText={(input) => handleChangeSenderAddress({input, type: `country` })}
          />
        

        <Text style={ styles.billFromText }>Bill To</Text>
          
          <Text style={ styles.label }>Client's Name</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            value={ data.clientName }
            onChangeText={(input) => handleChange({input, type: `clientName` })}
          />

          <Text style={ styles.label }>Client's Email</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            value={ data.clientEmail }
            onChangeText={(input) => handleChange({input, type: `clientEmail` })}
          />

          <Text style={ styles.label }>Street Address</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            value={ cAddress['street'] }
            onChangeText={(input) => handleChangeClientAddress({input, type: `street` })}
          />

          <View style={ styles.rowContainer }>
            <View style={ styles.halfContainer }>
              <Text style={ styles.label }>City</Text>
              <TextInput 
                autoCorrect={false} 
                style={ styles.textInput }
                value={ cAddress['city'] }
                onChangeText={(input) => handleChangeClientAddress({input, type: `city` })}
              />
            </View>
            <View style={ styles.halfContainer }>
              <Text style={ styles.label }>PostCode</Text>
              <TextInput 
                autoCorrect={false} 
                style={ styles.textInput }
                value={ cAddress['postCode'] }
                onChangeText={(input) => handleChangeClientAddress({input, type: `postCode` })}
              />
            </View>
          </View>

          <Text style={ styles.label }>Country</Text>
          <TextInput 
            autoCorrect={false} 
            style={ styles.textInput }
            value={ cAddress['country'] }
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
            value={ data.description }
            onChangeText={(input) => handleChange({input, type: `description` })}
          />
          <ItemList 
            items = { items }
            onItemsChange = {(input) => handleItemChange({input})}
          />
        </ScrollView>

        <View style={styles.bottomBar}>
          <TouchableOpacity style={ styles.buttonCancel }>
            <Text style={ styles.textCancel }>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={ styles.buttonSaveChanges }
            onPress={()=>{this.handleSaveChanges()}}
          >
            <Text style={ styles.textSaveChanges }>Save Changes</Text>
          </TouchableOpacity>
        </View>
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
    editInvoice: (data) => dispatch({
      type:'EDIT_INVOICE',
      data: data,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);