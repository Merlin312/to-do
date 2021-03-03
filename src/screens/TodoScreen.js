import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { EditMaodal } from '../components/EditModal';
import { AppCard } from '../components/ui/AppCard';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditMaodal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <View style={styles.bottons}>
          <View>
            <Text style={styles.titles}>{todo.title}</Text>
          </View>
          <View>
            <Button title="Ред." onPress={() => setModal(true)} />
          </View>
        </View>
      </AppCard>

      <View style={styles.bottons}>
        <View>
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
    // justifyContent: 'space-around',
  },
  botton: {
    width: '40%',
  },
  titles: {
    // paddingRight: 10,
    fontSize: 20,
    paddingTop: 7,
  },
});
