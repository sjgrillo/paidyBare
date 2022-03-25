import { CREATE_NEW_TODO_ITEM, DELETE_TODO_ITEM, EDIT_TODO_ITEM, TodoObject, UPDATE_EDITING } from './types';

export const createTodoAction = (todo: TodoObject) => {
  return {
    type: CREATE_NEW_TODO_ITEM,
    payload: todo,
    arrIndex: undefined,
  };
};

export const editTodoAction = (todo: TodoObject, index: number) => {
  return {
    type: EDIT_TODO_ITEM,
    payload: todo,
    arrIndex: index,
  };
};

export const deleteTodoAction = (todo: TodoObject, index: number) => {
  return {
    type: DELETE_TODO_ITEM,
    payload: todo,
    arrIndex: index,
  };
};

export const updateEditingAction = (todo: TodoObject, index: number, isEditing?: boolean) => {
  return {
    type: UPDATE_EDITING,
    payload: todo,
    arrIndex: index,
    isEditing: isEditing,
  };
};
