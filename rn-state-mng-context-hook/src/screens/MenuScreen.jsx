import React, { useState, useContext } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

import { FoodContext } from '../providers/FoodProvider';

const MenuScreen = () => {
  const food = useContext(FoodContext);
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');

  return (
    <SafeAreaView style={styles.rootContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.content}>
          <Text style={styles.title}>Food: {food.name}</Text>
          <Text style={styles.title}>Calories: {food.calories}</Text>
          <TextInput
            style={styles.input}
            placeholder="food name"
            onChangeText={text => {
              food.setName(text);
              setFoodName(text);
            }}
            value={foodName}
          />
          <TextInput
            style={styles.input}
            placeholder="calories"
            keyboardType={'number-pad'}
            onChangeText={text => {
              food.setCalories(text);
              setCalories(text);
            }}
            value={calories}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'purple',
  },
  input: {
    width: '70%',
    height: 40,
    padding: 8,
    margin: 8,
    borderColor: 'purple',
    borderWidth: 1,
    fontSize: 20,
  },
});

export default MenuScreen;
