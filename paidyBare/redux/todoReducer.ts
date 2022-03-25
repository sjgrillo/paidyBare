import { CREATE_NEW_TODO_ITEM, DELETE_TODO_ITEM, EDIT_TODO_ITEM, TodoObject, UPDATE_EDITING } from './types';

const initialState = {
  todoList: [] as TodoObject[],
  isEditing: false,
  editingIndex: -1,
};

const todoReducer = (state = initialState, action: { type: string; payload: TodoObject; arrIndex: number; isEditing: boolean }) => {
  switch (action.type) {
    case CREATE_NEW_TODO_ITEM:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case EDIT_TODO_ITEM:
      return {
        ...state,
        todoList: state.todoList.map((item, index) => (index === action.arrIndex ? { ...item, text: action.payload.text } : item)),
      };
    case DELETE_TODO_ITEM:
      return {
        ...state,
        todoList: state.todoList.filter((item, index) => index !== action.arrIndex),
      };
    case UPDATE_EDITING:
      return {
        ...state,
        isEditing: action.isEditing,
        editingIndex: action.arrIndex,
      };
    default:
      return state;
  }
};

export default todoReducer;
