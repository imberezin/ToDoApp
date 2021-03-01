import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _todo: ITodo;

  @Input() set todo(todo: ITodo){
    this._todo = todo;
  }
  // tslint:disable-next-line:typedef
  get todo(){
    return this._todo;
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {}

  public onCompleteTodo(todo: ITodo): void {
    todo.isCompleted = true;
  }

  public onArchiveTodo(): void {
    this.todo.isArchived = true;
  }
  
}
