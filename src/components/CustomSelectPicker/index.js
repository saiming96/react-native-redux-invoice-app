import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';

import styles from './styles.js';

const Index = (props) => {
  const payment_terms = props.paymentTerms;
  
  const [selectedTerm, setSelectedTerm] = useState(payment_terms[0]);
  const [show, setShow] = useState(false);

  const selected_term = (term) => {
    setSelectedTerm(term);
    props.onSelectChange(term);
    setShow(false);
  }

  const payment_terms_list = payment_terms.map((term) =>
    <TouchableOpacity
      key={term}
      style={ styles.listTouchable }
      onPress={()=>selected_term(term)}
    >
      <Text style={[styles.listText, {color: selectedTerm===term ? '#7C5DFA' : '#0C0E16'}]}>{term}</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableOpacity
      onPress={()=>setShow(true)} 
      style={ styles.selectContainer }
    >
      <View>
        <Text style={ styles.dateInput }>{selectedTerm}</Text>

        <Modal 
          transparent={true}
          animationType="fade"
          visible={ show }
          supportedOrientations={['portrait']}
          onRequestClose={()=>setShow(false)}
        >
          <View style={ styles.modalView }>
            <TouchableOpacity 
              activeOpacity={0}
              visible={show}
              onPress={()=>setShow(false)} 
              style={ styles.modalTouchable }
            >
              <TouchableHighlight 
                visible={show}
                style={ styles.modalInnerTouchable }
              >
                <View style={ styles.pickerContainer }>
                  {payment_terms_list}
                </View>
              </TouchableHighlight>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  )
};

export default Index;