import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';
import { filters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todo[] =[];
  filtroActual: filters;
  constructor(private store: Store<AppState>) { }


  ngOnInit() {

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtroActual = state.filter;
    });
  }


}
