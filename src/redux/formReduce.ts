import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FORM_CHANGE_MESSAGE } from './actionTypes';
import { IFormState } from '../interfaces/formTypes';
import { IAction } from '../interfaces/commonTypes';

const initialState: IFormState = {
  message: '',
  buttonDisabled: true,
};

const formPersistConfig = {
  key: 'form',
  storage,
  whiteList: [],
};

const formTodoReducer = (state: IFormState = initialState, action: IAction = {}): IFormState => {
  switch (action.type) {
    case FORM_CHANGE_MESSAGE:
      return { ...state, message: action.payload, buttonDisabled: !action.payload };
    default:
      return state;
  }
};

export const persistedFormReducer = persistReducer(formPersistConfig, formTodoReducer);
