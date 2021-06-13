import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MyButton = () => {
  return (
    <View style={{ width: 100, height: 500 }}>
      <Button title="customize button" />
      <Text style={{ width: 100, height: 100, backgroundColor: 'red' }}>
        Test test
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default MyButton;
