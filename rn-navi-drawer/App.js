import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View, SafeAreaView, Alert } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useIsDrawerOpen,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>HomeScreen</Text>
      <Button
        onPress={() =>
          navigation.navigate('Notifications', { id: 99, name: 'taro' })
        }
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation, route }) {
  const isDrawerOpen = useIsDrawerOpen();

  console.log('[NotificationsScreen] isDrawerOpen', isDrawerOpen);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>NotificationsScreen</Text>
      <Text>Param : name={route.params.name}</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
    // <SafeAreaView>
    //   <Text>CustomDrawerContent</Text>
    // </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="front"
        openByDefault={false}
        drawerStyle={{ width: '70%' }}
        overlayColor="green"
        drawerContentOptions={{
          activeTintColor: 'red',
          itemStyle: { marginTop: 8, borderWidth: 1 },
          labelStyle: { fontSize: 16 },
          style: { backgroundColor: 'dodgerblue' },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
