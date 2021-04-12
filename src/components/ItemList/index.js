import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles.js';

import IconDelete from '../../assets/svg/icon-delete.tsx';

const Index = props => {
  const [items, setItems] = useState(props.items);
  const new_item = {
    name: '',
    quantity: '',
    price: '',
    total: '',
  }

  useEffect(() => {
    props.onItemsChange(items);
  }, [items]);

  handleAddItem  = () => {
    setItems(pre_items=>[...pre_items, new_item])
  }

  handleRemoveItem = (index) => {
    setItems(items.filter((_,key) => key !==index))
  }

  handleChangeItem = ({input, type, index}) => {
    setItems(items.map((item, key) => 
      index === key ? 
      { ...item, 
        [type]: input, 
        total: type === 'quantity' || type === 'price' ? 
        type === 'quantity' ? (item.price*input).toFixed(2).toString() : (item.quantity*input).toString()
        : item.total
      } : item
    ))
  }

  const item_list = items.map((item, key) =>
    <View>
      <Text style={ styles.label }>Item Name</Text>
      <TextInput 
        autoCorrect={false}
        style={ styles.textInput }
        value={ item.name }
        onChangeText={(input)=>handleChangeItem({input, type:`name`, index:key})}
      />

      <View style={ styles.rowContainer }>
        <View style={{ ...styles.halfContainer, ...styles.row }}>
          <View style={ styles.qtyContainer }>
            <Text style={ styles.label }>Qty.</Text>
            <TextInput 
              autoCorrect={false} 
              style={ styles.textInput }
              value={ item.quantity.toString() }
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={(input)=>handleChangeItem({input, type:`quantity`, index:key})}
            />
          </View>
          <View style={ styles.priceContainer }>
            <Text style={ styles.label }>Price</Text>
            <TextInput 
              autoCorrect={false} 
              style={ styles.textInput }
              value={ parseFloat(item.price).toFixed(2).toString() }
              keyboardType="decimal-pad"
              onChangeText={(input)=>handleChangeItem({input, type:`price`, index:key})}
            />
          </View>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.row }}>
          <View style={ styles.totalContainer }>
            <Text style={ styles.label }>Total</Text>
            <TextInput 
              autoCorrect={false} 
              style={ styles.textInputNoBorder }
              value={ item.total != '' ? parseFloat(item.total).toFixed(2) : '' }
              editable={false}
            />
          </View>
          <TouchableOpacity 
            style={ styles.deleteButtonContainer }
            onPress={()=>handleRemoveItem(key)}
          >
            <IconDelete />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  // const item_list = items.map((item, key) =>
  //   <View>
  //     <Text style={ styles.textItemListTitle }>Item List</Text>

  //     <Text style={ styles.label }>Item Name</Text>
  //     <TextInput 
  //       autoCorrect={false}
  //       style={ styles.textInput }
  //       value={ item.name }
  //     />

  //     <View style={ styles.rowContainer }>
  //       <View style={{ ...styles.halfContainer, ...styles.row }}>
  //         <View style={ styles.qtyContainer }>
  //           <Text style={ styles.label }>Qty.</Text>
  //           <TextInput 
  //             autoCorrect={false} 
  //             style={ styles.textInput }
  //             value={ item.quantity }
  //           />
  //         </View>
  //         <View style={ styles.priceContainer }>
  //           <Text style={ styles.label }>Price</Text>
  //           <TextInput 
  //             autoCorrect={false} 
  //             style={ styles.textInput }
  //             value={ item.price }
  //           />
  //         </View>
  //       </View>
  //       <View style={{ ...styles.halfContainer, ...styles.row }}>
  //         <View style={ styles.totalContainer }>
  //           <Text style={ styles.label }>Total</Text>
  //           <TextInput 
  //             autoCorrect={false} 
  //             style={ styles.textInputNoBorder }
  //             value={ item.total }
  //           />
  //         </View>
  //         <View style={ styles.deleteButtonContainer }>
  //           <IconDelete />
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );

  return (
    <View>
      <Text style={ styles.textItemListTitle }>Item List</Text>
      {item_list}

      <TouchableOpacity
        style={ styles.buttonAddNewItem }
        onPress={()=>handleAddItem()}
      >
        <Text style={ styles.textAddNewItem }>+ Add New Item</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Index;