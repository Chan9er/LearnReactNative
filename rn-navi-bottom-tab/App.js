import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Logo from './assets/logo.png';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style="auto" />
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style="auto" />
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          // activeTintColor: 'red',
          inactiveTintColor: 'green',
          activeBackgroundColor: 'blue',
          style: {
            backgroundColor: 'dodgerblue',
          },
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          options={({ route }) => ({
            tabBarLabel: 'TEST',
            tabBarBadge: 3,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = focused ? 'home' : 'home-outline';

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
