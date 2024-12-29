import { Component,inject } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodosService } from '../services/todos.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todosService = inject(TodosService);
  todoList : Todo[] = [];

  constructor(){
    this.todosService.getTodos().then((todos: Todo[]) => {
      this.todoList = todos;
    });
}

selectedTodo: any = null;

  showDetails(todo: any) {
    // Si le même todo est cliqué, masquer les détails
    this.selectedTodo = this.selectedTodo === todo ? null : todo;
  }

}
