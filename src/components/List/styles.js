import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Fonts from '../../constant/fonts';

export default StyleSheet.create({
  listContainer: {
    width: '100%',
    height: 134,
    borderRadius: 8,
    backgroundColor: Colors.white,
    marginBottom: 16,
    padding: 24,
  },
  listInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  idText: {
    color: 'black',
    fontSize: 12,
    paddingBottom: 24,
    fontFamily: Fonts.bold,
  },
  idHashtagText: {
    color: '#7E88C3'
  },
  paymentDueText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: '#888EB0',
    paddingBottom: 8,
  },
  clientNameText: {
    color: '#858BB2',
    fontSize: 12,
    fontFamily: Fonts.medium,
    paddingBottom: 27,
    alignItems: 'flex-end',
  },
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
  listRightContainer: {
    flex:1,
    alignItems:'flex-end'
  },
  totalText: {
    fontSize: 16,
    fontFamily: Fonts.bold,
    color: '#0C0E16',
  }
});