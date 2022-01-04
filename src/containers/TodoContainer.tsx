import React from 'react';
import styled from 'styled-components';
import { useTodoHook } from '../hooks/useTodoHook';
import { TodoList } from '../components/TodoList';
import { TodoForm } from '../components/TodoForm';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 720px;
  margin: 32px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TodoContainer = React.memo(() => {
  const { values, handlers } = useTodoHook();
  const { todoList, message, buttonDisabled } = values;
  const { addTodoHandler, removeTodoHandler, changeMessageHandler, changeTodoStateHandler } = handlers;
  return (
        <Container>
            <TodoForm
                message={message}
                buttonDisabled={buttonDisabled}
                addTodoHandler={addTodoHandler}
                changeMessageHandler={changeMessageHandler}
            />
            <TodoList onRemoveTodo={removeTodoHandler} onChangeTodoState={changeTodoStateHandler} todoList={todoList}/>
        </Container>
  );
});

TodoContainer.displayName = 'TodoContainer';