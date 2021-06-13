import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
} from 'react-native';

import TaskItem from './components/TaskItem';

export default function App() {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = (itemIndex) => {
    console.log('index', itemIndex);
    setTasks((prevTask) =>
      prevTask.filter((item, index) => index !== itemIndex),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Add new task'}
        onPress={() => {
          setTasks((prevTask) => {
            return [...prevTask, inputTask];
          });
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder={'タスクを入力してください'}
        onChangeText={(text) => {
          setInputTask(text);
        }}
        value={inputTask}
      />
      <FlatList
        style={styles.list}
        keyExtractor={(_item, index) => index.toString()}
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem
            title={item}
            onDeleteTask={handleDeleteTask}
            index={index}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  list: { flex: 1, width: '80%', marginTop: 24 },
});
