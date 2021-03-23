import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { EditMaodal } from '../components/EditModal';
import { AppCard } from '../components/ui/AppCard';
import { THEME } from '../theme';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppButton } from '../components/ui/AppButton';

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
            <AppTextBold style={styles.titles}>{todo.title}</AppTextBold>
          </View>
          <View>
            <AppButton onPress={() => setModal(true)}>
              <FontAwesome name="edit" size={20} />
            </AppButton>
          </View>
        </View>
      </AppCard>

      <View style={styles.bottons}>
        <View style={styles.botton}>
          <AppButton onPress={goBack} color={THEME.GREY_COLOR}>
            <Ionicons name="chevron-back" size={20} color="#fff" />
          </AppButton>
        </View>

        <View style={styles.botton}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          >
            <Ionicons name="remove-circle" size={20} color="#fff" />
          </AppButton>
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
    padding: 15,
  },
  botton: {
    width: Dimensions.get('window').width / 3,
  },
  titles: {
    fontSize: 20,
    paddingTop: 8,
  },
});
