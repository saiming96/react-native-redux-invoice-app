import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';

import styles from './styles.js';

const Index = (props) => {

  return (
    <Modal 
      transparent={true}
      animationType="fade"
      visible={ props.showDeleteModal }
      supportedOrientations={['portrait']}
      onRequestClose={()=>props.onHideModal()}
    >
      <View style={ styles.modalView }>
        <TouchableOpacity 
          activeOpacity={0}
          visible={ props.showDeleteModal }
          onPress={()=>props.onHideModal()} 
          style={ styles.modalTouchable }
        >
          <TouchableHighlight 
            visible={ props.showDeleteModal }
            style={ styles.modalInnerTouchable }
          >
            <View style={ styles.viewContainer }>
              <Text style={ styles.textTitle }>Confirm Delete</Text>
              <Text style={ styles.textContent }>
                Are you sure want to delete invoice #{props.data.id}? This action cannot be undone.
              </Text>
              <View style={ styles.buttonContainer }>
                <View style={ styles.innerButtonConatiner }>
                  <TouchableOpacity 
                    style={ styles.buttonCancel }
                    onPress={()=>props.onHideModal()} 
                  >
                    <Text style={ styles.textCancel }>Cancel</Text>
                  </TouchableOpacity>
                </View>
                <View style={ styles.innerButtonConatiner }>
                  <TouchableOpacity 
                    style={ styles.buttonDelete }
                    onPress={()=>props.onDeleteData()} 
                  >
                    <Text style={ styles.textDelete }>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </TouchableOpacity>
      </View>
    </Modal>
  )
};

export default Index;