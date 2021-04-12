import { StyleSheet } from 'react-native';
import Colors from '../../constant/colors.js';

export default StyleSheet.create({
  modalView: {
    flex:1,
    backgroundColor: Colors.modalOpacity,
  },
  modalTouchable: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalInnerTouchable: {
    flex: 1,
    padding:24,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    height: 220,
    borderRadius: 8,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 32,
    paddingTop: 32,
    lineHeight: 32,
    color: Colors.black,
  },
  textContent: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.gray,
    paddingHorizontal: 32,
    paddingTop: 8,
    lineHeight: 22,
  },
  buttonContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  innerButtonConatiner: {
    paddingHorizontal: 4,
  },
  textCancel: {
    color: Colors.darkGray,
    fontSize: 12,
    fontWeight: '700',
  },
  buttonCancel: {
    backgroundColor: Colors.lightGray,
    width: 73,
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
  buttonDelete: {
    backgroundColor: Colors.red,
    width: 89,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});