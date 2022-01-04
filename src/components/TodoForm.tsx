import React from 'react';
import { MessageInput } from './MessageInput';
import { Button } from './Button';
import styled from 'styled-components';
import { ITodoFormProps } from '../interfaces/todoTypes';

const InputContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TodoForm = React.memo(({ message, buttonDisabled, addTodoHandler, changeMessageHandler }: ITodoFormProps) => {
  return (
        <InputContainer>
            <MessageInput value={message} onChange={changeMessageHandler} placeholder={'TODO'}/>
            <Button buttonClickHandler={addTodoHandler} buttonValue={'ADD TODO'} disabled={buttonDisabled}/>
        </InputContainer>
  );
});

TodoForm.displayName = 'TodoForm';