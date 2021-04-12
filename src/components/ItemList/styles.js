import { StyleSheet } from 'react-native';
import Colors from '../../constant/colors.js';

export default StyleSheet.create({
  label: {
    marginTop: 24,
    fontSize: 12,
    fontWeight: '500',
    color: Colors.darkGray,
  },
  textInput: {
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
  textInputNoBorder: {
    marginTop: 10,
    width: '100%',
    height: 48,
    paddingHorizontal: 20,
    fontSize: 12,
    fontWeight: '700',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  halfContainer: {
    width: '50%',
  },
  qtyContainer: {
    width: '35%',
  },
  priceContainer:{
    width: '65%',
    paddingLeft: 16,
  },
  totalContainer: {
    width: '70%',
    paddingLeft: 24,
  },
  deleteButtonContainer: {
    width: '20%',
    paddingLeft: 24,
    justifyContent: 'flex-end',
  },
  bottomBar: {
    height: 91,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  textItemListTitle: {
    marginTop: 66,
    color: '#777F98',
    fontSize: 18,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
  },
  buttonAddNewItem: {
    marginTop: 48, 
    backgroundColor: '#F9FAFE',
    width: '100%',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAddNewItem: {
    color: Colors.darkGray,
    fontSize: 12,
    fontWeight: '700',
  },
});