import {TODO_ADD, TODO_CHANGE_STATE, TODO_REMOVE} from "./actionTypes";
import { ITodoState } from "../interfaces/todoTypes";
import { AnyAction } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState: ITodoState = {
    todoList: []
}

const todoPersistConfig = {
    key: 'todos',
    storage,
}


const todoReducer = (state: ITodoState = initialState, action: AnyAction): ITodoState => {
    switch (action.type) {
        case TODO_ADD:
        case TODO_REMOVE:
        case TODO_CHANGE_STATE:
            return { todoList: action.payload }
    }

    return state
}

export const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer)

