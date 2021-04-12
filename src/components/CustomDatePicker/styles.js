import { StyleSheet } from 'react-native';
import Colors from '../../constant/colors.js';

export default StyleSheet.create({
  dateContainer: {
    marginTop: 10,
    width: '100%',
    height: 48,
    borderColor: Colors.inputBorder,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 20,
    fontSize: 12,
    fontWeight: '700',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  dateInput: {fontSize: 12,
    fontWeight: '700',
  },
  modalConatainer: {
    flex: 1,
  },
  modalTouchable: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  innerTouchable: {
    flex: 1,
    borderTopColor: Colors.lightGray,
    borderTopWidth: 1,
  },
  datePickerContainer: {
    backgroundColor: Colors.gray,
    height: 256,
    overflow: 'hidden'
  },
  datePickerInnerContainer: { 
    marginTop: 20 
  },
});