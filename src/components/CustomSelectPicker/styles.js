import { StyleSheet } from 'react-native';
import Colors from '../../constant/colors.js';

export default StyleSheet.create({
  selectContainer: {
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
  listTouchable: {
    height: 47,
    paddingVertical:16,
    paddingLeft: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.inputBorder,
    borderRadius: 8,
  },
  listText: {
    fontSize: 12,
    fontWeight: '700',
  },
  modalView: {
    flex:1,
    backgroundColor: Colors.modalOpacity,
  },
  modalTouchable: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalInnerTouchable: {
    flex: 1,
    padding:24,
    alignItems: 'center',
  },
  pickerContainer: {
    backgroundColor: Colors.white,
    width: 240,
    borderRadius: 8,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});