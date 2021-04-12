import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from '../../utils/moment';

import styles from './styles.js';
import Colors from '../../constant/colors.js';



const Index = props => {
  const { defaultDate } = props;
  // const [date, setDate] = useState(moment(defaultDate).format('DD MMMM YYYY'));
  const [date, setDate] = useState(moment.getFullDate(defaultDate));
  const [show, setShow] = useState(false);
  
  const onChange = (e, selectedDate) => {
    // let selected_date = moment(selectedDate).tz('Asia/Kuala_Lumpur').format('DD MMMM YYYY')
    let selected_date = moment.getFullDate(moment.getMalaysiaDate(selectedDate));
    setDate(selected_date);
    props.onDateChange(selected_date);
  }

  
  return (
    <TouchableOpacity
      onPress={()=>setShow(true)} 
      style={ styles.dateContainer }
    >
      <View>
        <Text style={ styles.dateInput }>{date}</Text>

        <Modal 
          transparent={true}
          animationType="slide"
          visible={ show }
          supportedOrientations={['portrait']}
          onRequestClose={()=>setShow(false)}
        >
          <View style={ styles.modalConatainer }>
            <TouchableOpacity 
              activeOpacity={0}
              visible={show}
              onPress={()=>setShow(false)} 
              style={ styles.modalTouchable }
            >
              <TouchableOpacity 
                underlayColor={Colors.white}
                visible={show}
                onPress={()=>setShow(false)} 
                style={ styles.innerTouchable }
              >
                <View style={ styles.datePickerContainer }>
                  <View style={ styles.datePickerInnerContainer }>
                    <DateTimePicker
                      display="spinner"
                      value={new Date(date)}
                      mode="date"
                      // minimumDate={new Date(moment().subtract(100, 'years').format('DD MMMM YYYY'))}
                      minimumDate={ moment.getMinimumDate }
                      onChange={ onChange }
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  )
};

Index.defaultProps ={
  defaultDate: moment.now(),
  onDateChange: ()=>{},
}

export default Index;