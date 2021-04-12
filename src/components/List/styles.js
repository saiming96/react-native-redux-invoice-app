import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listContainer: {
    width: '100%',
    height: 134,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
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
    fontWeight: '700',
    paddingBottom: 24,
  },
  idHashtagText: {
    color: '#7E88C3'
  },
  paymentDueText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#888EB0',
    paddingBottom: 8,
  },
  clientNameText: {
    color: '#858BB2',
    fontSize: 12,
    fontWeight: '500',
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
    fontWeight:'700',
    textTransform: 'capitalize',
    paddingHorizontal: 4,
  },
  listRightContainer: {
    flex:1,
    alignItems:'flex-end'
}
});