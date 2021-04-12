import { StyleSheet } from 'react-native';

import Colors from '../src/constant/colors.js';

export default StyleSheet.create({
  headerStyle: {
    height: 120,
    backgroundColor: '#373B53',
  },
  headerLeftContainer: {
    flex: 1,
    width: 75,
    backgroundColor: Colors.darkPurple,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
  },
  headerLeftTopContainer: {
    flex: 1,
    width: '100%'
  },
  headerLeftBottomContainer: {
    flexGrow: 1, 
    width: '100%',
    backgroundColor: Colors.lightPurple,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerRightContainer: {
    width: 132,
    flex: 1,
    flexDirection: 'row',
  },
  appearenceModeContainer: {
    flex:1,
    width:80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageContainer: {
    flex:1,
    width:80,
    borderLeftWidth: 1,
    borderColor: Colors.lightPurpleGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: { 
    width: 32, height: 32, borderRadius: 16 
  },
});