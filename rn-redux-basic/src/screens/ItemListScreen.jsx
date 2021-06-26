import React from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { deleteItem } from './../store/actions/item';

const ItemListScreen = () => {
  const items = useSelector(state => state.xyz.itemList);
  const dispatch = useDispatch();

  return (
    <FlatList
      style={styles.listContainer}
      data={items}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={data => (
        <TouchableOpacity onPress={() => dispatch(deleteItem(data.item.key))}>
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
