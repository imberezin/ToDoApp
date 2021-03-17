import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor(public dialog:MatDialog, private todoService: TodoService) { }

  ngOnInit(): void {
  }

  public onNewTodoSubmit(): void {
    console.log('onNewTodoSubmit');

    console.log(this.form);
    console.log(this.form.value);  // { first: '', last: '' }

    const formValues = this.form.value;

    const newTodo: ITodo = {
      id: uuidv4(),
      title: formValues.title,
      description: formValues.description,
      endDate: formValues.date,
      isArchived: false,
      isCompleted: false,
      selected: false,
    }
    
    this.todoService.addNewTodo(newTodo);
    this.dialog.closeAll();
    // tslint:disable-next-line:prefer-const
    // let newTodo: ITodo;
    // newTodo.title = this.form.controls['title'];

  }
}
