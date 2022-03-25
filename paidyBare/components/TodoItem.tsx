import React, { ReactElement, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { TodoObject } from '../redux/types';
import { useDispatch } from 'react-redux';
import { deleteTodoAction, updateEditingAction } from '../redux/actions';

export interface todoItemProps {
  obj: TodoObject;
  index: number;
}

export const TodoItem = (props: todoItemProps): ReactElement => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const exitLabel = 'X';
  const viewTestId = 'todoView';
  const mainBtnId = 'mainBtnId';
  const exitBtnId = 'exitBtnId';

  const deleteTodo = (text: string, index: number) => {
    dispatch(deleteTodoAction({ text }, index));
  };

  const setEdit = () => {
    dispatch(updateEditingAction(props.obj, props.index, !isEditing));
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container} testID={viewTestId}>
      <TouchableOpacity style={styles.button} onPress={() => setEdit()} testID={mainBtnId}>
        <Text style={styles.todoText}>{props.obj.text}</Text>
        <TouchableOpacity style={styles.exitButtonStyle} onPress={() => deleteTodo(props.obj.text, props.index)} testID={exitBtnId}>
          <Text style={styles.exitButtonText}>{exitLabel}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
    marginLeft: 10,
  },
  exitButtonText: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  exitButtonStyle: {
    flex: 0.1,
    alignSelf: 'center',
    backgroundColor: '#f06363',
    padding: 6,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#DDDDDD',
    borderRadius: 50,
    marginTop: 15,
    flexDirection: 'row',
  },
});
