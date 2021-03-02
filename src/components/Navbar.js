import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import {THEME} from '../theme'

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

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
        backgroundColor: THEME.MAIN_IOS_COLOR,
      }
    })
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})
