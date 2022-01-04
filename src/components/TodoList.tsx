import React from 'react';
import styled from 'styled-components';
import { ITodoListProps } from '../interfaces/todoTypes';
import { Todo } from './Todo';

const TodosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid #eee;
  padding: 16px;
`;

const EmptyList = styled.div`
  width: 100%;
  height: 32px;
  background: repeating-linear-gradient(45deg, #222, #222 10px, #d6dc13 10px, #d6dc13 20px);
  border-radius: 4px;
`;

export const TodoList = React.memo(({ todoList, onRemoveTodo, onChangeTodoState }: ITodoListProps) => (
  <TodosContainer>
    {todoList && todoList.length ? (
      todoList.map(({ message, id, isActive }) => (
        <Todo
          key={id}
          message={message}
          id={id}
          isActive={isActive}
          onRemoveTodo={onRemoveTodo}
          onChangeTodoState={onChangeTodoState}
        />
      ))
    ) : (
      <EmptyList />
    )}
  </TodosContainer>
));

TodoList.displayName = 'TodoList';
