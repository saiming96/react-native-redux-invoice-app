import { CREATE_INVOICE, MARK_AS_PAID, EDIT_INVOICE, DELETE_INVOICE } from '../constants';
import data from '../../data.json';

const initialState = {
  invoice: data,
};

const invoiceReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_INVOICE:
      let data = action.data;
      return {invoice:[...state.invoice, data]};
    case DELETE_INVOICE:
      return {invoice: state.invoice.filter(item=>item.id !== action.data.id)}
    case MARK_AS_PAID:
      return {
        invoice: state.invoice.map(
          (item) => 
            item.id === action.data.id 
            ? {...item, status: 'paid'}
            : item
        )
     }
    case EDIT_INVOICE:
      return {
        invoice: state.invoice.map(
          (item) => 
            item.id === action.data.id 
            ? action.data
            : item
        )
     }
    default:
      return state;
  }
}

export default invoiceReducer;