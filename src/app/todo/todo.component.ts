import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { ToggleAllTodoAction } from './todo.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  chkToggleAll: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkToggleAll = new FormControl(false);

    this.chkToggleAll.valueChanges.subscribe( () =>  {
      const action  = new ToggleAllTodoAction(this.chkToggleAll.value);
      this.store.dispatch(action);
    });

  }

}
