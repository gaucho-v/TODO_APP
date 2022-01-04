import { createSelector } from 'reselect';

import { IAppState } from '../interfaces/commonTypes';
import { ITodoState } from '../interfaces/todoTypes';
import { IFormState } from '../interfaces/formTypes';

const getTodoState = ({ todoState }: IAppState): ITodoState => todoState;

const getFormState = ({ formState }: IAppState): IFormState => formState;

export const getTodoList = createSelector(getTodoState, (state) => state.todoList);

export const getFormMessage = createSelector(getFormState, (state) => state.message);

export const getFormButtonDisabled = createSelector(getFormState, (state) => state.buttonDisabled);
