import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { THEME } from '../theme';
import { AppTextBold } from './ui/AppTextBold';

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    ...Platform.select({
      android: {
        backgroundColor: 'green',
      },
      ios: {
        // backgroundColor:
        borderBottomColor: THEME.MAIN_IOS_COLOR,
        borderBottomWidth: 2,
      },
    }),
  },
  text: {
    color: Platform.OS === 'ios' ? THEME.MAIN_IOS_COLOR : '#fff',
    fontSize: 20,
  },
});
