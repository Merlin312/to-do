import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AppCard } from '../components/ui/AppCard';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo, onRemove }) => {
  const [madal, setModal] = useState(false);
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.titles}>{todo.title}</Text>
        <Button
          style={styles.btn}
          title="Редагувати"
          onPress={() => setModal(true)}
        />
      </AppCard>

      <View style={styles.bottons}>
        <View style={styles.botton}>
          <Button title="Назад" onPress={goBack} color={THEME.GREY_COLOR} />
        </View>

        <View style={styles.botton}>
          <Button
            title="Видалити"
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
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
  card: {
    marginBottom: 20,
    padding: 10,
  },
  botton: {
    width: '40%',
  },
  titles: {
    fontSize: 20,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  btn: {
    // flexDirection: 'row',
    // fontSize: 40,
  },
});
