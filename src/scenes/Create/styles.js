import { StyleSheet } from 'react-native';
import Colors from '../../constant/colors.js';
import Fonts from '../../constant/fonts';

export default StyleSheet.create({
  screen: { 
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentScreen: {
    flex: 1,
    paddingHorizontal:24,
  },
  titleText: {
    marginTop: 24,
    fontSize: 24,
    fontFamily: Fonts.bold,
  },
  scrollView: {
    flex: 1,
    marginBottom: 24,
  },
  billFromText: {
    marginTop: 24,
    fontSize: 12,
    fontFamily: Fonts.bold,
    color: Colors.darkPurple,
  },
  label: {
    marginTop: 24,
    fontSize: 12,
    fontFamily: Fonts.medium,
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
    fontFamily: Fonts.bold,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  textInputNoBorder: {
    marginTop: 10,
    width: '100%',
    height: 48,
    paddingHorizontal: 20,
    fontSize: 12,
    fontFamily: Fonts.bold,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  halfContainer: {
    width: '45%',
  },
  secondHalfContainer: {
    width: '50%',
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
  buttonSaveSend: {
    backgroundColor: Colors.darkPurple,
    width: 112,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSaveSend: {
    color: Colors.white,
      fontSize: 12,
      fontFamily: Fonts.bold,
  },
  buttonSaveDraft: {
    backgroundColor: Colors.lightBlack,
    width: 117,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSaveDraft: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: Fonts.bold,
  },
  buttonDiscard: {
    backgroundColor: Colors.lightGray,
    width: 73,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDiscard: {
    color: Colors.darkGray,
    fontSize: 12,
    fontFamily: Fonts.bold,
  },
  textItemListTitle: {
    marginTop: 66,
    color: '#777F98',
    fontSize: 18,
    fontFamily: Fonts.bold,
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
    fontFamily: Fonts.bold,
  },
});