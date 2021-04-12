import { StyleSheet } from 'react-native';
import Colors from '../../constant/colors.js';

export default StyleSheet.create({
  screen: { 
    flex: 1, 
  },
  contentScreen: {
    flex: 1,
    paddingHorizontal:24,
  },
  scrollView: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    marginTop: 16,
    marginBottom: 24,
    padding: 24,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  statusContainer: {
    height:81,
    backgroundColor: Colors.white,
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal:24,
    justifyContent:'space-between',
  },
  statusTextContainer: {
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.gray,
  },
  statusBarContainer: {
    height: '100%',
    justifyContent: 'center',
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
  buttonEdit: {
    backgroundColor: Colors.lightGray,
    width: 73,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textId: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.black,
  },
  textHashtag: {
    color: Colors.darkGray,
  },
  marginTop8: {
    marginTop: 8,
  },
  marginTop12: {
    marginTop: 12,
  },
  marginTop32: {
    marginTop: 32,
  },
  textEdit: {
    color: Colors.darkGray,
    fontSize: 12,
    fontWeight: '700',
  },
  buttonDelete: {
    backgroundColor: Colors.red,
    width: 89,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDelete: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  buttonMarkPaid: {
    backgroundColor: Colors.darkPurple,
    width: 149,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMarkPaid: {
    color: Colors.white,
      fontSize: 12,
      fontWeight: '700',
  },
  greyText: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.darkGray,
  },
  whiteText: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.white,
  },
  blackBoldText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.black,
  },
  blackBoldTextsm: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.black,
    marginTop: 12,
  },
  whiteBoldText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
  },
  halfWidth:{ 
    width: '50%' 
  },
  contentContainer : {
    marginTop: 30,
    flexDirection: 'row',
  },
  containerSentTo: {
    marginTop: 30,
  },
  itemContainer: {
    marginTop: 40,
    width: '100%',
    backgroundColor: Colors.lightGray,
    padding: 24,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  itemInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalContainer: {
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  grandTotalContainer: {
    height: 80,
    width: '100%',
    backgroundColor: Colors.lightBlack,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between'
  },
  grandTotalInnerContainer: { 
    height:'100%', 
    justifyContent: 'center' 
  }
});