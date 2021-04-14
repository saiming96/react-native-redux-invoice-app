import { StyleSheet } from 'react-native';
import Fonts from '../../constant/fonts';

export default StyleSheet.create({
    screen: {
      flex:1,
    },
    svgContainer: {
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      alignItems: 'center',
    },
    textTitle: {
      fontSize: 20,
      fontFamily: Fonts.bold, 
      marginBottom: 24,
    },
    textContentLineOne: {
      fontSize:12,
      fontFamily: Fonts.medium,
      color:'#888EB0',
    },
    textContentLineTwo: {
      fontSize:12,
      fontFamily: Fonts.medium,
      color:'#888EB0',
    },
    textBold: {
      fontFamily: Fonts.bold, 
    },
});