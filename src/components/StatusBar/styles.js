import { StyleSheet } from 'react-native';
import Fonts from '../../constant/fonts';

export default StyleSheet.create({
  statusContainer: {
    width:104,
    height: 40,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 6,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize:12,
    fontFamily: Fonts.bold,
    textTransform: 'capitalize',
    paddingHorizontal: 4,
  },
});