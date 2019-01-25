import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { filters } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todo: Todo[], filter: filters): Todo[] {

    switch(filter) {
      case 'completados':
        return todo.filter(t => t.completado );
       case 'pendientes':
        return todo.filter(t => !t.completado );
      default:
      return todo;
    }



  }

}
