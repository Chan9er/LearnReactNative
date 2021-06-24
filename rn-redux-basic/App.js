import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemForm from './src/screens/ItemForm';
import ItemList from './src/screens/ItemList';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import configureStore from './src/store/store';

const store = configureStore();

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ItemForm"
            component={ItemForm}
            options={{
              headerTintColor: '#5fc9f8',
            }}
          />
          <Stack.Screen
            name="ItemList"
            component={ItemList}
            options={{
              headerTintColor: '#5fc9f8',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
