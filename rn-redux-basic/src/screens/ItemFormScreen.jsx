import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { addItem } from './../store/actions/item';

const ItemFormScreen = ({ navigation }) => {
  const [itemName, setItemName] = useState('');

  const dispatch = useDispatch();
  const submit = item => dispatch(addItem(item));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux</Text>
      <TextInput
        value={itemName}
        placeholder="Name"
        style={styles.textInput}
        onChangeText={item => setItemName(item)}
      />
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => {
          setItemName('');
          submit(itemName);
        }}>
        <Text style={styles.submitLabel}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => navigation.navigate('ItemList')}>
        <Text style={styles.submitLabel}>Go to ItemList</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 30,
    marginTop: 16,
    color: 'white',
  },
  textInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    width: 120,
    height: 120,
    borderColor: '#5fc9f8',
    borderWidth: 2,
    borderRadius: 100,
  },
  textContainer: { marginBottom: 16 },
  submitLabel: { fontSize: 22, color: '#5fc9f8' },
});

export default ItemFormScreen;
