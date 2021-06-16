import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from './../screens/HomeScreen';
import DetailsScreen from './../screens/DetailsScreen';

const RootStackNavigator = () => {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator
      initialRouteName={'Home'}
      mode="modal"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerStyle: {
          // backgroundColor: 'tomato',
          borderBottomWidth: 1,
          borderBottomColor: 'dodgerblue',
        },

        // headerTitleが設定されている時、headerTitleStyleとheaderTintColorが効かない
        headerTintColor: 'dodgerblue',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontStyle: 'italic',
          textDecorationLine: 'line-through',
        },

        // headerTitle: () => <Text style={styles.headerTitle}>タイトル123</Text>,
      })}>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        // initialParams={{
        //   itemId: 1,
        //   code: '345',
        // }}
        options={{
          title: 'Home',
          headerTitle: () => <Text style={styles.headerTitle}>ホーム</Text>,
          // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => Alert.alert('headerRight pressed!')}>
          //     <Text style={styles.headerRight}>Info</Text>
          //   </TouchableOpacity>
          // ),
        }}
      />
      <RootStack.Screen
        name="Details"
        component={DetailsScreen}
        // initialParams={{
        //   itemId: 2,
        //   name: 'Name001',
        // }}
        options={({ route, navigation }) => ({
          title: route.params.name,
          // headerBackTitle: '',
          headerTitle: () => <Text style={styles.headerTitle}>詳細</Text>,
          // headerLeft: () => (
          //   <TouchableOpacity
          //     onPress={() => navigation.goBack()}
          //     style={styles.headerLeft}>
          //     <AntDesign name="left" size={24} color="gray" />
          //   </TouchableOpacity>
          // ),
        })}
      />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: { fontSize: 14, fontWeight: 'bold' },
  headerLeft: { marginStart: 10 },
  headerRight: { marginEnd: 10, color: 'dodgerblue' },
});

export default RootStackNavigator;
