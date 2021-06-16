import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements'; // Need to install!! See: https://reactnativeelements.com/docs
import { Ionicons } from '@expo/vector-icons';

import * as colors from './../resources/colors';

const MenuItem = ({ itemLabel, onItemPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onItemPress}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{itemLabel}</Text>

        {/* See: https://docs.expo.io/guides/icons/ */}
        {/* See: https://icons.expo.fyi/ */}
        <Ionicons name="md-checkmark-circle" size={32} color={colors.blue} />
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: { width: '80%', marginHorizontal: '5%' },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    marginHorizontal: '1%',
  },
  itemLabel: { fontSize: 16 },
});

export default MenuItem;
