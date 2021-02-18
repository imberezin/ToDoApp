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
    },
    {
      title: 'Cormorant, pied',
      description: 'Phalacrocorax varius',
      isCompleted: true,
      isArchived: false,
      endDate: '6/5/2020',
    },
    {
      title: 'Common wolf',
      description: 'Canis lupus',
      isCompleted: true,
      isArchived: true,
      endDate: '2/11/2021',
    },
    {
      title: 'Duiker, gray',
      description: 'Sylvicapra grimma',
      isCompleted: true,
      isArchived: true,
      endDate: '9/7/2020',
    },
    {
      title: 'Paca',
      description: 'Agouti paca',
      isCompleted: true,
      isArchived: false,
      endDate: '7/31/2020',
    }
  ];

  // tslint:disable-next-line:variable-name
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
      return this._todoSubject.asObservable();
  }
}
