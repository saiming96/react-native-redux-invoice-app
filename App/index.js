import * as React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Index from '../src/scenes/Index';
import Show from '../src/scenes/Show';
import Create from '../src/scenes/Create';
import Edit from '../src/scenes/Edit';

import IconMoon from "../src/assets/svg/icon-moon.tsx";
import Logo from "../src/assets/svg/logo.tsx";

import styles from './styles.js';
import Colors from '../src/constant/colors'

import invoiceReducer from '../src/redux/reducers/invoiceReducer'

const reducer = invoiceReducer;
const store = createStore(reducer)

const Stack = createStackNavigator();

const CustomHeader = {
  title: '',
  headerStyle: {
    height: 120,
    backgroundColor: Colors.lightBlack,
  },
  headerLeft: () => (
    <View style = { styles.headerLeftContainer }>
      <View style={ styles.headerLeftTopContainer }></View>
      <View style={ styles.headerLeftBottomContainer }>
        <Logo />
      </View>
    </View>
  ),
  headerRight: () => (
    <View style={ styles.headerRightContainer }>
      <View style = { styles.appearenceModeContainer }>
        <IconMoon />
      </View>

      <View style = { styles.profileImageContainer }>
        <Image
          style={ styles.profileImage }
          source={require('../src/assets/images/image-avatar.jpg')}
        />
      </View>
    </View>
  ),
}

function App() {
  return (
    <Provider store={ store }>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Index" 
              component={Index} 
              options={CustomHeader}
            />
            <Stack.Screen 
              name="Show" 
              component={Show} 
              options={CustomHeader}
            />
            <Stack.Screen 
              name="Create" 
              component={Create}
              options={CustomHeader}
            />
            <Stack.Screen 
              name="Edit" 
              component={Edit} 
              options={CustomHeader}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;