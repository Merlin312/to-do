import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const AppTest = (props) => {
  <Text style={{ ...StyleSheet.defoult, ...props.style }}>
    {props.children}
  </Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
  },
});
