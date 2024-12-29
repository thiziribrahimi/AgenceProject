import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  getTodos = async () :Promise<Todo[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return (await response.json()) ?? [];
  }
}
