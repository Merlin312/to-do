import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';

export const EditMaodal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 1) {
      Alert.alert(
        'Помилка!',
        `Минімальна довжина має бути 3 символа. Зараз ${
          title.trim().length
        } символів`
      );
    } else if (title.trim().length == 1) {
      Alert.alert(
        'Помилка!',
        `Минімальна довжина має бути 3 символа. Зараз ${
          title.trim().length
        } символ`
      );
    } else if (title.trim().length <= 3) {
      Alert.alert(
        'Помилка!',
        `Минімальна довжина має бути 3 символа. Зараз ${
          title.trim().length
        } символа`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          // відображає текст по дефолту
          placeholder="Введіть назву.."
          autoCapitalize="none"
          //вводить обмеження максимальної кількості символів в 64
          maxLength={64}
        />
        <View style={styles.buttons}>
          <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
            Відмінити
          </AppButton>
          <AppButton onPress={saveHandler}>Зберегти</AppButton>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_IOS_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
