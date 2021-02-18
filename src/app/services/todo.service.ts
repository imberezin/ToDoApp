import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      title: 'Tokay gecko',
      description: 'Gekko gecko',
      isCompleted: false,
      isArchived: false,
      endDate: '6/6/2020',
      selected: true,
    },
    {
      title: 'Cormorant, pied',
      description: 'Phalacrocorax varius',
      isCompleted: false,
      isArchived: false,
      endDate: '6/5/2020',
      selected: false,
    },
    {
      title: 'Common wolf',
      description: 'Canis lupus',
      isCompleted: false,
      isArchived: false,
      endDate: '2/11/2021',
      selected: false,
    },
    {
      title: 'Duiker, gray',
      description: 'Sylvicapra grimma',
      isCompleted: false,
      isArchived: false,
      endDate: '9/7/2020',
      selected: false,
    },
    {
      title: 'Paca',
      description: 'Agouti paca',
      isCompleted: false,
      isArchived: false,
      endDate: '7/31/2020',
      selected: false,
    }
  ];

  // tslint:disable-next-line:variable-name
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  // tslint:disable-next-line:variable-name
  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject<ITodo>(this.mock[0]);

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
}
