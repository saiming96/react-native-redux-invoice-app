import { StyleSheet } from 'react-native';

import Colors from '../../constant/colors.js';

export default StyleSheet.create({
  screen: { 
    flex: 1, 
    paddingHorizontal: 24,
    backgroundColor: Colors.backgroundColor,
  },
  headerContainer: {
    width: '100%',
    height: 108,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  headerLeftContainer: {
    flexDirection:'column',
    justifyContent:'center',
  },
  headerLeftTitle: {
    fontSize: 20,
    fontWeight:'700',
    color: '#0C0E16',
  },
  headerLeftDescription: {
    fontSize: 12,
    fontWeight:'500',
    color: '#888EB0',
  },
  headerRightContainer: {
    width: 111,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerRightFilterContainer: {
    width: 21,
    height: '100%',
  },
  headerRightButtonContainer: {
    width: 90,
    justifyContent:'center',
  },
  headerRightButton: {
    width:'100%',
    height: 44,
    backgroundColor: Colors.darkPurple,
    borderRadius: 22,
    flexDirection: 'row',
  },
  headerRightButtonIconContainer: {
    margin: 6,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightButtonTextContainer: {
    height: '100%',
    justifyContent: 'center',
    padding: 2,
  },
  headerRightButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.white,
  },
});