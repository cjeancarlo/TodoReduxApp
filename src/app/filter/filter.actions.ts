import { Action } from '@ngrx/store';

export const SET_FILTERS = '[ FILTER  ] SET Filter ';

export type filters = 'todos' | 'completados' | 'pendientes' ;

export class SetFilterAction implements Action {

    readonly type = SET_FILTERS;
    constructor( public validFilters: filters) {}
}

export type Actions  = SetFilterAction;
