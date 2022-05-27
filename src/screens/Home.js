import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontScale} from '../utils/Utils';

export default function Home() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>This is home page</Text>
      <Text style={styles.text}>SuccessFully Logged In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: fontScale(30),
  },
});
