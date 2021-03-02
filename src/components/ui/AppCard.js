import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//в цьому файлі я працюю над карточкою
export const AppCard = (props) => (
  <View style={{ ...styles.default, ...props.style }}>
    <Text style={styles.textStyle}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    // працюю над тінями картки, for ios
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    // тепер працюю над тінями for android
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  textStyle: {
    // paddingBottom: 10,
  },
});
