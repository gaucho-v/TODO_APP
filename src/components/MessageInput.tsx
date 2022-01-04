import React from 'react';
import styled from 'styled-components';
import { IInputProps } from '../interfaces/commonTypes';

const Input = styled.input`
  width: 78%;
  height: 30px;
  padding-left: 8px;
`;

export const MessageInput = React.memo(({ value, onChange, placeholder }: IInputProps) => (
  <Input value={value} onChange={onChange} placeholder={placeholder} />
));

MessageInput.displayName = 'MessageInput';
