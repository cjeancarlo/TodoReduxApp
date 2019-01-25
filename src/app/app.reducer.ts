import { Todo } from './todo/model/todo.model';
import * as fromFilterActions from './filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodoReducer from './todo/todo.reducer';
import * as fromFilterReducer from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filter: fromFilterActions.filters;
}

export const AppReducers: ActionReducerMap<AppState> = {
todos: fromTodoReducer.todoReducer,
filter: fromFilterReducer.FilterReducer
};

