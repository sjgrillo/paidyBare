import React, { ReactElement } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { NewTodoItemButton } from '../components/NewTodoItemButton';
import { useSelector } from 'react-redux';
import { TodoItem } from '../components/TodoItem';
import { RootState } from '../redux/store';

export const TodoScreen = (): ReactElement => {
  const todoArray = useSelector((state: RootState) => state);
  const titleText = 'Todo:';

  const renderTodoList = () => {
    //function to map and dispaly entire todoList
    return todoArray.todoList.map((item, index) => {
      return (
        <View key={index}>
          <TodoItem key={index} obj={item} index={index} />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        <Text style={styles.title}>{titleText}</Text>
        <View style={styles.containerList}>{renderTodoList()}</View>
      </ScrollView>
      <View style={styles.bottomButton}>
        <NewTodoItemButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerList: {
    marginHorizontal: 10,
  },
  title: {
    marginTop: 50,
    marginLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottomButton: {
    marginBottom: 15,
  },
});
