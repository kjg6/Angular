import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {

  title: string = '';
  description: string = '';
  constructor(private todoService: ToDoService) { }
onSubmit(form:any) {
       this.title = form.value.title;
      this.description = form.value.description;
       this.todoService.addTask(this.title, this.description);

  } 

}
