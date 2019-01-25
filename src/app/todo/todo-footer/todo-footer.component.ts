import { Component, OnInit } from '@angular/core';
import * as  fromFilter from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../model/todo.model';
import { DeleteAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.filters[] = ['todos' , 'completados' , 'pendientes' ];
  actualFilter: fromFilter.filters;
  todoPendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state) => {
        this.actualFilter = state.filter;
        this.contarTodosPendientes(state.todos);
    });
  }

  filterChange( changeFilter: fromFilter.filters ) {
    const action = new fromFilter.SetFilterAction(changeFilter);
    this.store.dispatch(action);
  }

  contarTodosPendientes( todos: Todo[] ) {
    this.todoPendientes = todos.filter( todo => !todo.completado  ).length;
  }

  deleteAllCompleted() {
    const action = new  DeleteAllTodoAction();
    this.store.dispatch(action);
  }

}
