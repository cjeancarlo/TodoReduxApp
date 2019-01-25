import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as fromTodo from '../todo.actions';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

@Input() todo: Todo;
@ViewChild('txtInputFisico') txtInputFisico: ElementRef;

editando: boolean;
chkField: FormControl;
txtInput: FormControl;


  constructor ( private store: Store<AppState>) { }

  ngOnInit() {

    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe( () => {
        const action = new fromTodo.ToggleTodoAction(this.todo.id);
        this.store.dispatch(action);
    });
  }

Edit() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.focus();
    }, 1);

  }

Delete() {
    console.log(this.todo.id);
    const action  = new fromTodo.DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

FinishEdicion() {
    this.editando = false;
    const action  = new fromTodo.EditTodoAction(this.todo.id, this.txtInput.value );
    this.store.dispatch(action);
  }




}
