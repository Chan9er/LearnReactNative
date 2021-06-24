import React, { useContext } from 'react';
import { Button, StyleSheet, Text, SafeAreaView } from 'react-native';

import { FoodContext } from '../providers/FoodProvider';

const HomeScreen = () => {
  // const food = useContext(FoodContext);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Food: {food.name}</Text>
      <Text style={styles.title}>Calories: {food.calories}</Text> */}

      <FoodContext.Consumer>
        {food => (
          <>
            <Text style={styles.title}>Food: {food.name}</Text>
            <Text style={styles.title}>Calories: {food.calories}</Text>
            <Button title="set name" onPress={() => food.setName('test')} />
          </>
        )}
      </FoodContext.Consumer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default HomeScreen;
