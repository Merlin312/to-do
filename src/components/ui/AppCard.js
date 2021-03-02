import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppCard = (props) => (
  <View style={styles.default}>
    <Text>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  default: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'green',
  },
});
