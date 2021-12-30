import { combineReducers } from 'redux';
import { persistedTodoReducer } from "./todoReducers";
import { persistedFormReducer } from "./formReduce";

export const rootReducer = combineReducers({
    todoState: persistedTodoReducer,
    formState: persistedFormReducer
})