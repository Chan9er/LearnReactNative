import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const DetailsScreen = (props) => {
  // const navigation = useNavigation();

  // console.log('[DetailsScreen] props', props);
  const { itemId, name } = props.route.params;

  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <Text>Details Screen: itemId={itemId}</Text>
      <Text>Details Screen: name={name}</Text>
      <Button
        title="Go back to Home"
        onPress={() =>
          props.navigation.navigate('Home', { testName: 'testName' })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center' },
});

export default DetailsScreen;
