import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>App</Text>
      <FontAwesomeIcon name="rocket" size={30} color="#900" />
      <FontAwesomeIcon name="home" size={30} color="#900" />
      <MaterialIcon name="account" size={60} color="#900" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({text: {color: 'white'}});

export default App;
