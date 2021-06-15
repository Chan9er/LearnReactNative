import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import CustomButton from './CustomButton';

const TestUseState = () => {
  console.log('[TestUseState]init before setCount count=', count);
  const [count, setCount] = useState(0);
  console.log('[TestUseState]init after setCount count=', count);

  //   console.log('[TestUseState]init before setFlag flag=', flag);
  //   const [flag, setFlag] = useState(false);
  //   console.log('[TestUseState]init after setFlag flag=', flag);

  return (
    <SafeAreaView style={styles.root}>
      <Text>Count: {count}</Text>
      <View style={styles.btnContainer}>
        <CustomButton
          label="Reset"
          buttonStyles={styles.btnStyles}
          onPress={() => {
            setCount(0);
          }}
        />
        <CustomButton
          label="Count + 1"
          buttonStyles={styles.btnStyles}
          onPress={() => {
            console.log('[TestUseState][Count + 1] before count=', count);
            setCount(count + 1);
            console.log('[TestUseState][Count + 1] after count=', count);
          }}
        />
        <CustomButton
          label="Count - 1"
          buttonStyles={styles.btnStyles}
          onPress={() => {
            setCount(count - 1);
          }}
        />
        <CustomButton
          label="Count + 5"
          buttonStyles={styles.btnStyles}
          onPress={() => {
            console.log('[TestUseState][Count + 5] before count=', count);
            for (let i = 0; i < 5; i++) {
              setCount(count + 1);
              //   setCount((prevCnt) => prevCnt + 1);
            }
            console.log('[TestUseState][Count + 5] after count=', count);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnContainer: {
    width: '100%',
    marginVertical: 16,
  },
  btnStyles: { width: '80%', marginHorizontal: 8, alignSelf: 'center' },
});

export default TestUseState;
