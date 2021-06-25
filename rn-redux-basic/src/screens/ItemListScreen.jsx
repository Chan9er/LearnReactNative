import React from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

const ItemListScreen = () => {
  return (
    <FlatList
      style={styles.listContainer}
      data={[]}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={data => (
        <TouchableOpacity onPress={() => console.log(' pressed')}>
          <Text style={styles.itemName}>{data.item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  listText: {
    fontSize: 30,
  },
  itemName: { borderColor: 'dodgerblue', borderWidth: 1, height: 24 },
});

export default ItemListScreen;
