import React from 'react';
import styled from 'styled-components';
import { ITodoProps } from '../interfaces/todoTypes';
import { ButtonClose } from '../icons/icons';

const TodoWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
  padding: 12px;
  background: ${(props) => props.theme};
  border-bottom: 1px solid #eee;
  border-radius: 4px 4px 0 0;
`;

const TodoCheckboxInput = styled.input`
  margin: 0 18px 0 0;
  min-width: 24px;
  min-height: 24px;
  cursor: pointer;
`;

const TodoMessage = styled.div`
  width: 100%;
  text-align: start;
  margin-right: 4px;
  flex-wrap: wrap;
`;

const TodoRemove = styled.div`
  display: flex;
  justify-content: center;
  min-width: 16px;
  color: red;
  cursor: pointer;
`;

export const Todo = React.memo(({ message, id, isActive, onRemoveTodo, onChangeTodoState }: ITodoProps) => (
  <TodoWrapper theme={isActive ? '#00000008' : 'none'}>
    <TodoCheckboxInput type="checkbox" onChange={onChangeTodoState(id)} checked={isActive} />
    <TodoMessage>{message}</TodoMessage>
    <TodoRemove onClick={onRemoveTodo(id)}>{ButtonClose()}</TodoRemove>
  </TodoWrapper>
));

Todo.displayName = 'Todo';
