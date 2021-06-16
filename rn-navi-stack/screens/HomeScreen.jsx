import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  // console.log('[HomeScreen] props', props);

  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      {/* <Text>Details Screen: params={props.route.params.testName}</Text> */}
      <TouchableOpacity
        style={styles.contentItem}
        onPress={() =>
          props.navigation.navigate('Details', { itemId: 100, name: 'name199' })
        }>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
  contentItem: {
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#EDF4FF',
    borderRadius: 8,
    marginVertical: 8,
    padding: 8,
  },
});

export default HomeScreen;
