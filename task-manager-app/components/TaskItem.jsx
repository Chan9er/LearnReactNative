import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onDeleteTask(props.index)}>
      <View style={styles.listItem}>
        <Text>
          index:{props.index} title:{props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#eef4ff',
  },
});

export default TaskItem;
