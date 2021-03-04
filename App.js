import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import * as Font from 'expo-font';

import AppLoading from 'expo';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

//асинхронна функція для загрузики шрифтів
async function loadApplication() {
  await Font.loadAsync({
    'roboto-redular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  //для id
  const [todoId, setTodoId] = useState(null);
  //для тексту todo
  const [todos, setTodos] = useState([
    // { id: '1', title: 'Learn English' }
  ]);

  // if(!isReady){
  //   return(<AppLoading
  //        startAsync={loadApplication}
  //       onError=(err => console.log(err))
  //     onFinish={() => setIsReady(true)} />)
  // }

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };
  // ця функція видаляє todo текст/завдання
  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      'Видалення елементу',
      `Ви впевнені, що хочете видалити "${todo.title}"?`,
      [
        { text: 'Відмінити', style: 'cancel' },
        {
          text: 'Видалити',
          style: 'destructive',
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  //ця функція відповідає за редагування todo тексту
  const updateTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        //ця функція вертатає на головний екран
        goBack={() => setTodoId()}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
