import React, { ReactElement, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createTodoAction, editTodoAction, updateEditingAction } from '../redux/actions';
import { RootState } from '../redux/store';

export const NewTodoItemButton = (): ReactElement => {
  const [tempText, setTempText] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const viewId = 'newTodoView';
  const textInputId = 'textInputId';
  const submitBtnId = 'submitBtnId';

  useEffect(() => {
    if (state.isEditing) {
      setTempText(state.todoList[state.editingIndex].text);
    } else {
      setTempText('');
    }
  }, [state.isEditing]);

  const createOrUpdateText = () => {
    return state.isEditing ? 'Update' : 'Create';
  };

  const saveTodo = () => {
    dispatch(createTodoAction({ text: tempText }));
    setTempText('');
  };

  const saveEdit = () => {
    dispatch(editTodoAction({ text: tempText }, state.editingIndex));
    setTempText('');
    dispatch(updateEditingAction({ text: '' }, -1, false));
  };

  const handleSubmitTodo = () => {
    state.isEditing ? saveEdit() : saveTodo();
  };

  return (
    <View style={styles.container} testID={viewId}>
      <TextInput
        style={styles.inputStyle}
        placeholder='Enter your new todo item here'
        value={tempText}
        onChangeText={(text) => {
          setTempText(text);
        }}
        testID={textInputId}
      />
      <View style={styles.containerFooter}>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmitTodo()} testID={submitBtnId}>
          <Text>{createOrUpdateText()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: '#DDDDDD',
    padding: 4.5,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 65,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f06363',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  container: {},
  containerFooter: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
  },
});
