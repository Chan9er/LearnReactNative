// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  useDeviceOrientation,
  useDimensions,
} from '@react-native-community/hooks';

import MyButton from './componets/MyButton';

export default function App() {
  // console.log('test001');
  // console.log('test002');
  // console.log('test003', StatusBar.currentHeight);

  // const testDem = Dimensions.get('screen');
  // console.log('test Dimensions', Dimensions.get('screen'));

  // let test;
  // test.toString();
  // console.log('test img', require('./assets/favicon.png'));

  const orientation = useDeviceOrientation();
  console.log('is orientation portrait: ', orientation.portrait);
  console.log('is orientation landscape: ', orientation.landscape);

  const testDem22 = useDimensions();
  console.log('testDem22: ', testDem22);

  const onPressHandler = () => {
    console.log('Text pressed!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
      <View style={{ backgroundColor: 'red', width: 100, height: 100 }} />
      <View
        style={{
          backgroundColor: 'yellow',
          width: 100,
          height: 100,
          top: 10,
          left: 10,
          // alignSelf: 'stretch',
          position: 'absolute',
        }}
      />
      <View style={{ backgroundColor: 'green', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'red', width: 100, height: 100 }} />
      {/* <View style={{ backgroundColor: 'green', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'yellow', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'green', width: 100, height: 100 }} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // flexWrap: 'wrap',
    // alignContent: 'center',
  },
});
