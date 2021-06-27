import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const UserListItem = ({ user }) => {
  return (
    <View style={style.container}>
      <Image style={style.thumbnail} source={{ uri: user.picture.thumbnail }} />
      <Text style={style.nameText}>{user.name.first}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  nameText: {
    padding: 15,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'purple',
    borderWidth: 3,
  },
});

export default UserListItem;
