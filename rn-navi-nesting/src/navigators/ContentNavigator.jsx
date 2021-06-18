import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './../screens/HomeScreen';
import DetailsScreen from './../screens/DetailsScreen';

const Stack = createStackNavigator();

const ContentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      mode="modal"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: 'dodgerblue',
        },
      })}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitle: () => <Text style={styles.headerTitle}>ホーム</Text>,
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: { fontSize: 14, fontWeight: 'bold' },
});

export default ContentNavigator;
