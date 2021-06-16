import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomTextInput from './CustomTextInput';

const TestTextInput = () => {
  return (
    <View style={styles.root}>
      <CustomTextInput
        label="Test label111"
        placeholder="Email"
        keyboardType={'email-address'}
      />

      <CustomTextInput
        label="Test label222"
        placeholder="Pwd"
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestTextInput;
