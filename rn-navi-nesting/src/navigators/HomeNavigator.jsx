import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 14 },
          // tabStyle: { width: 100 },
          // style: { backgroundColor: 'powderblue' },
          inactiveTintColor: 'gray',
          activeTintColor: 'dodgerblue',
          indicatorStyle: {
            backgroundColor: 'dodgerblue',
            height: 5,
            borderRadius: 2,
          },
        }}>
        <Tab.Screen
          name="Tab1"
          component={Tab1Screen}
          options={{ tabBarLabel: '社内' }}
        />
        <Tab.Screen name="Tab2" component={Tab2Screen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ root: { flex: 1 } });

export default HomeNavigator;
