import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemFormScreen from './src/screens/ItemFormScreen';
import ItemListScreen from './src/screens/ItemListScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import itemReducer from './src/store/reducers/item';

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  xyz: itemReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ItemForm"
            component={ItemFormScreen}
            options={{
              headerTintColor: '#5fc9f8',
            }}
          />
          <Stack.Screen
            name="ItemList"
            component={ItemListScreen}
            options={{
              headerTintColor: '#5fc9f8',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
