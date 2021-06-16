import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ label, onPress, buttonStyles, labelStyles }) => {
  console.log('[CustomButton] render');

  return (
    <TouchableOpacity style={[styles.root, buttonStyles]} onPress={onPress}>
      <Text style={[styles.label, labelStyles]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E9BF1',
    padding: 12,
    margin: 8,
  },
  label: { color: '#FFFFFF', fontWeight: 'bold', alignItems: 'center' },
});

export default CustomButton;
