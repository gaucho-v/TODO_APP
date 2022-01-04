import { TODO_ADD, TODO_REMOVE, TODO_CHANGE_STATE, FORM_CHANGE_MESSAGE } from './actionTypes';
import { ITodoItem } from '../interfaces/todoTypes';

export const addTodo = (todoList: ITodoItem[]) => ({
  type: TODO_ADD,
  payload: todoList,
});

export const removeTodo = (todoList: ITodoItem[]) => ({
  type: TODO_REMOVE,
  payload: todoList,
});

export const changeTodoState = (todoList: ITodoItem[]) => ({
  type: TODO_CHANGE_STATE,
  payload: todoList,
});

export const changeFormMessage = (value: string) => ({
  type: FORM_CHANGE_MESSAGE,
  payload: value,
});
