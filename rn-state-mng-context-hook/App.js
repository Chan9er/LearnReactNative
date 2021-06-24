import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './src/navigators/RootNavigator';
import { FoodProvider } from './src/providers/FoodProvider';

export default function App() {
  return (
    <FoodProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </FoodProvider>
  );
}
