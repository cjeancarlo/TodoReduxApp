import * as fromTODO from './todo.actions';
import { Todo } from './model/todo.model';


const actionTodo1 = new Todo( 'Learn REDUX' );
const actionTodo2 = new Todo( 'learn NGRX' );
const actionTodo3 = new Todo( 'Buy the Domain' );

const  estadoInicial: Todo[] = [actionTodo1, actionTodo2, actionTodo3];

export function todoReducer(
                    state = estadoInicial,
                    action: fromTODO.Actions ): Todo[] {

    switch ( action.type ) {

        case fromTODO.AGREGAR_TODO:
            const actionTodo = new Todo( action.texto );
            return [ ...state, actionTodo  ];

        case fromTODO.TOGGLE_TODO:
            return state.map(todoEdit => {
                return {
                    ...todoEdit, // clone, all the properties of the object,  except those that we explicitly declare.
                    completado: todoEdit.id === action.id ? !todoEdit.completado : todoEdit.completado
                };
            });

            case fromTODO.EDIT_TODO:
            return state.map(todoEdit => {
                return {
                    ...todoEdit, // clone, all the properties of the object,  except those that we explicitly declare.
                    texto: todoEdit.id === action.id ? action.texto.length > 0 ? action.texto : todoEdit.texto : todoEdit.texto
                };
            });

            case fromTODO.DELETE_TODO:
            return state.filter( (todo ) => todo.id !== action.id);

            case fromTODO.DELETE_ALL_COMPLETED_TODO:
            return state.filter( (todo ) => !todo.completado);

            case fromTODO.TOGGLEALL_TODO:
            return  state.map(todoEdit => {
                return {
                    ...todoEdit, // clone, all the properties of the object,  except those that we explicitly declare.
                    completado: action.completado
                };
            });

        default:
            return state;
        }

}
