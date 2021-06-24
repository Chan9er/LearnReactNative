import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';

const RootNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        style: {
          backgroundColor: 'purple',
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={() => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? 'list-circle' : 'list-circle-outline'}
                size={size}
                color={color}
              />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
