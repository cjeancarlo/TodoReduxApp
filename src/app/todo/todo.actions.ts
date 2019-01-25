import { Action } from '@ngrx/store';


export  const AGREGAR_TODO = '[TODO] agregar Todo';
export  const TOGGLE_TODO = '[TODO] valor completado  de  Todo cambio';
export  const EDIT_TODO = '[TODO] valor texto  de  Todo cambio';
export  const DELETE_TODO = '[TODO] delete Todo';
export  const TOGGLEALL_TODO = '[TODO] seleccionar todos los elementos del Todo';
export  const DELETE_ALL_COMPLETED_TODO = '[TODO] Eliminar todos los Todo';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor( public texto: string ) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor( public id: number ) { }
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;
    constructor( public id: number, public texto: string ) { }
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;
    constructor( public id: number) { }
}
export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLEALL_TODO;
    constructor( public completado: boolean ) { }
}

export class DeleteAllTodoAction implements Action {
    readonly type = DELETE_ALL_COMPLETED_TODO;
    constructor( ) { }
}




export type Actions = AgregarTodoAction | ToggleTodoAction | EditTodoAction | DeleteTodoAction | ToggleAllTodoAction | DeleteAllTodoAction;
