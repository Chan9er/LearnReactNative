import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.root}>
        <StatusBar style="auto" />
        <TouchableOpacity
          style={styles.contentItem}
          onPress={() => navigation.navigate('Details')}>
          <Text>Home Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
  contentItem: {
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#EDF4FF',
    borderRadius: 8,
    marginVertical: 8,
    padding: 8,
  },
});

export default HomeScreen;
