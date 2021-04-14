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
  textGray: {
    color: Colors.gray,
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
    justifyContent: 'flex-end',
    backgroundColor: Colors.white,
  },
  buttonSaveChanges: {
    backgroundColor: Colors.darkPurple,
    marginHorizontal: 4,
    width: 138,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSaveChanges: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: Fonts.bold,
  },
  buttonCancel: {
    backgroundColor: Colors.lightGray,
    marginHorizontal: 4,
    width: 96,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCancel: {
    color: '#7E88C3',
    fontSize: 12,
    fontFamily: Fonts.bold,
  },
});