import React from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';
import { THEME } from '../theme';

export const EditMaodal = ({ visible, goBack }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.wrap}>
        <TextInput />
        <Button title="Відмінити" />
        <Button title="Зберегти" />
        <Button title="Назад" onPress={goBack} color={THEME.GREY_COLOR} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  wrap: {
    // width: '40%',
    flex: 1,
  },
});
