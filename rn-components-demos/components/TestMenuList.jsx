import React from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';

import MenuItem from './MenuItem';

const TestMenuList = () => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <MenuItem
        itemLabel={'Item 001'}
        onItemPress={() => Alert.alert('Item 001 has been pressed.')}
      />
      <MenuItem
        itemLabel={'Item 002'}
        onItemPress={() => Alert.alert('Item 002 has been pressed.')}
      />
      <MenuItem
        itemLabel={'Item 003'}
        onItemPress={() => Alert.alert('Item 003 has been pressed.')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestMenuList;
