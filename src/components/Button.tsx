import React from 'react';
import styled from 'styled-components';
import { IButtonProps } from '../interfaces/commonTypes';

const AddButton = styled.button`
  width: 18%;
  height: 36px;
`;

export const Button = React.memo(({ buttonValue, buttonClickHandler, disabled }: IButtonProps) => {
  return (
    <AddButton onClick={buttonClickHandler} disabled={disabled}>
      {buttonValue}
    </AddButton>
  );
});

Button.displayName = 'Button';
