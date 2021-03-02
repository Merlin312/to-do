import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AppCard } from '../components/ui/AppCard';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <AppCard>
        <Text>{todo.title}</Text>
        <Button title="Редагувати" />
      </AppCard>

      <View style={styles.bottons}>
        <View style={styles.botton}>
          <Button title="Назад" onPress={goBack} color={THEME.GREY_COLOR} />
        </View>

        <View style={styles.botton}>
          <Button
            title="Видалити"
            color={THEME.DANGER_COLOR}
            onPress={() => console.log('To remove')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botton: {
    width: '40%',
  },
});
