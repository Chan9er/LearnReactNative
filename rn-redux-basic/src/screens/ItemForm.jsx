import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/item';

const ItemForm = ({ navigation }) => {
  const [food, setFood] = useState('');

  const dispatch = useDispatch();

  const submitFood = item => dispatch(addItem(item));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux</Text>
      <TextInput
        value={food}
        placeholder="Name"
        style={styles.foodInput}
        onChangeText={food => setFood(food)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitFood(food);
          setFood('');
        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => navigation.navigate('ItemList')}>
        <Text style={{ fontSize: 22, color: 'white' }}>Go to ItemList</Text>
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
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white',
  },
  foodInput: {
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
});

export default ItemForm;
