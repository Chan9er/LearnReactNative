import React from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../store/actions/item';

const ItemList = () => {
  const dispatch = useDispatch();

  const deleteCurrent = key => dispatch(deleteItem(key));

  const items = useSelector(state => state.item.itemList);

  return (
    <FlatList
      style={styles.listContainer}
      data={items}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={data => (
        <TouchableOpacity onPress={() => deleteCurrent(data.item.key)}>
          <Text
            style={{ borderColor: 'dodgerblue', borderWidth: 1, height: 24 }}>
            {data.item.name}
          </Text>
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
});

export default ItemList;
