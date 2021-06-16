import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Modal, SafeAreaView } from 'react-native';

import * as colors from './resources/colors';
import CustomButton from './components/CustomButton';
import TestUseState from './components/TestUseState';
import TestTextInput from './components/TestTextInput';
import TestMenuList from './components/TestMenuList';

export default function App() {
  const [testUseStateModalVisible, setTestUseStateModalVisible] =
    useState(false);
  const [testTextInputModalVisible, setTestTextInputModalVisible] =
    useState(false);
  const [testMenuItemModalVisible, setTestMenuItemModalVisible] =
    useState(false);

  console.log('[App] render');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <CustomButton
        label="Test UseState"
        onPress={() => {
          setTestUseStateModalVisible(true);
        }}
      />

      <CustomButton
        label="Test TextInput"
        onPress={() => {
          setTestTextInputModalVisible(true);
        }}
      />

      <CustomButton
        label="Test MenuItem"
        onPress={() => {
          setTestMenuItemModalVisible(true);
        }}
      />

      {/* Test useState */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={testUseStateModalVisible}
        onRequestClose={() => {
          setTestUseStateModalVisible((prevState) => !prevState);
        }}>
        <TestUseState />
        <CustomButton
          label="Close Modal"
          buttonStyles={styles.closeBtnContainer}
          labelStyles={styles.closeBtnLable}
          onPress={() => {
            setTestUseStateModalVisible(false);
          }}
        />
      </Modal>

      {/* Test TextInput */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={testTextInputModalVisible}
        onRequestClose={() => {
          setTestTextInputModalVisible((prevState) => !prevState);
        }}>
        <TestTextInput />
        <CustomButton
          label="Close Modal"
          buttonStyles={styles.closeBtnContainer}
          labelStyles={styles.closeBtnLable}
          onPress={() => {
            setTestTextInputModalVisible(false);
          }}
        />
      </Modal>

      {/* Test MenuItem */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={testMenuItemModalVisible}
        onRequestClose={() => {
          setTestMenuItemModalVisible((prevState) => !prevState);
        }}>
        <TestMenuList />
        <CustomButton
          label="Close Modal"
          buttonStyles={styles.closeBtnContainer}
          labelStyles={styles.closeBtnLable}
          onPress={() => {
            setTestMenuItemModalVisible(false);
          }}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  closeBtnContainer: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginBottom: 80,
    borderWidth: 1,
    width: '80%',
    borderColor: colors.blue,
  },
  closeBtnLable: { color: colors.blue },
});
