import { StyleSheet } from 'react-native';
import Fonts from '../../constant/fonts';

export default StyleSheet.create({
  viewContainer: {
    marginTop: 32,
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 15,
  },
  iconContainer: {
    height:'100%',
    justifyContent: 'center',
  },
  textContainer: {
    height:'100%',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: '#0C0E16',
  },
});