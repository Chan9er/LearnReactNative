import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>App</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({text: {color: 'white'}});

export default App;
