import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Array<ITodo> = [];

  // tslint:disable-next-line:variable-name
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);

  // tslint:disable-next-line:variable-name
  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject<ITodo>(this.todos.length ? this.todos[0] : null);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
      return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo>{
    return this._singleTodoSubject.asObservable();
  }

  // tslint:disable-next-line:typedef
  public setSelectedTodo(todo: ITodo){
    this._singleTodoSubject.next(todo);
  }

  public addNewTodo(todo: ITodo): void {
    const existingTodos: Array<ITodo> = this._todoSubject.value;
    existingTodos.push(todo);
    this._todoSubject.next(existingTodos);
  }
}

// private mock: ITodo[] = [
//   {
//     id: 1,
//     title: 'Tokay gecko',
//     description: 'Gekko gecko',
//     isCompleted: false,
//     isArchived: false,
//     endDate: '6/6/2020',
//     selected: true,
//   },
//   {
//     id: 2,
//     title: 'Cormorant, pied',
//     description: 'Phalacrocorax varius',
//     isCompleted: false,
//     isArchived: false,
//     endDate: '6/5/2020',
//     selected: false,
//   },
//   {
//     id: 3,
//     title: 'Common wolf',
//     description: 'Canis lupus',
//     isCompleted: false,
//     isArchived: false,
//     endDate: '2/11/2021',
//     selected: false,
//   },
//   {
//     id: 4,
//     title: 'Duiker, gray',
//     description: 'Sylvicapra grimma',
//     isCompleted: false,
//     isArchived: false,
//     endDate: '9/7/2020',
//     selected: false,
//   },
//   {
//     id: 5,
//     title: 'Paca',
//     description: 'Agouti paca',
//     isCompleted: false,
//     isArchived: false,
//     endDate: '7/31/2020',
//     selected: false,
//   }
// ];
