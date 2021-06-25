import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  decrement,
  increment,
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
    <View
      style={{
        height: '80%',
        width: '100%',
        justifyContent: 'center',
      }}>
      <View style={{ alignSelf: 'center' }}>
        <Text>{counter.value}</Text>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>

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

const styles = StyleSheet.create({});

export default Counter;
