import { FORM_CHANGE_MESSAGE } from "./actionTypes";
import { IFormState } from "../interfaces/formTypes";
import { AnyAction } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState: IFormState = {
    message: '',
    buttonDisabled: true,
}

const formPersistConfig = {
    key: 'form',
    storage,
    whiteList: []
}


const formTodoReducer = (state: IFormState = initialState, action: AnyAction): IFormState => {
    switch (action.type) {
        case FORM_CHANGE_MESSAGE:
            return { ...state, message: action.payload, buttonDisabled: !action.payload }
    }

    return state
}

export const persistedFormReducer = persistReducer(formPersistConfig, formTodoReducer)