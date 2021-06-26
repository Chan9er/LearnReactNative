import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  fetchUsers,
} from './../store/slice/counterSlice';

import UserListItem from './UserListItem';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page: 1 }));
  }, [dispatch]);

  const handleOnEndReached = () => {
    console.log('handleOnEndReached');
    dispatch(fetchUsers({ page: counter.nextPage }));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {counter.value}</Text>
      <Button title="Increment value" onPress={() => dispatch(increment())} />
      <Button title="Decrement value" onPress={() => dispatch(decrement())} />
      <Button
        title="incrementByAmount value"
        onPress={() => dispatch(incrementByAmount(13))}
      />

      {counter.loading && <Text>LOADING</Text>}
      {counter.error && <Text>ERROR</Text>}
      {!counter.loading && !counter.error && <Text>DEFAULT</Text>}
      <FlatList
        data={counter.users}
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => <UserListItem user={item} />}
        onEndReached={handleOnEndReached}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
