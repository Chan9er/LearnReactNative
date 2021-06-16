import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

import * as colors from './../resources/colors';

const CustomTextInput = (props) => {
  const {
    label,
    placeholder,
    keyboardType,
    onChange,
    secureTextEntry = false,
    textInputStyles,
    value,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.lightGrey}
          keyboardType={keyboardType ?? 'default'}
          secureTextEntry={secureTextEntry}
          onChangeText={onChange}
          value={value}
          style={[styles.textInput, textInputStyles]}
          numberOfLines={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    marginBottom: '5%',
    width: '80%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    color: colors.primaryTextColor,
    fontWeight: 'bold',
    fontSize: 14,
  },
  textInput: {
    flex: 1,
    height: 46,
    paddingStart: 8,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primaryTextColor,
    borderRadius: 4,
  },
});

export default CustomTextInput;
