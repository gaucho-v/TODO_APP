import { useCallback } from 'react';
import { addTodo, removeTodo, changeTodoState, changeFormMessage } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getFormMessage, getTodoList, getFormButtonDisabled } from '../redux/selectors';
import { filterListById, changeItemStateById, getTodoItem } from '../utils/utils';

export const useTodoHook = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(getTodoList);
  const formMessage = useSelector(getFormMessage);
  const buttonDisabled = useSelector(getFormButtonDisabled);

  const addTodoHandler = useCallback(() => {
    dispatch(addTodo([getTodoItem(formMessage), ...todoList]));
    dispatch(changeFormMessage(''));
  }, [dispatch, todoList, formMessage]);

  const removeTodoHandler = useCallback((todoId: string) => () => {
    dispatch(removeTodo(filterListById(todoList, todoId)));
  }, [dispatch, todoList]);

  const changeTodoStateHandler = useCallback((todoId: string) => () => {
    dispatch(changeTodoState(changeItemStateById(todoList, todoId)));
  }, [dispatch, todoList]);

  const changeMessageHandler = useCallback((event) => {
    dispatch(changeFormMessage(event.target.value));
  }, [dispatch]);


  return {
    values: {
      todoList,
      message: formMessage,
      buttonDisabled,
    },
    handlers: {
      addTodoHandler,
      removeTodoHandler,
      changeMessageHandler,
      changeTodoStateHandler,
    },
  };
};