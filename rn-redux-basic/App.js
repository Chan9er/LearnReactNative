import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemFormScreen from './src/screens/ItemFormScreen';
import ItemListScreen from './src/screens/ItemListScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
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
  );
}
