import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do',
  imports: [NgFor],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent implements OnInit {
markTaskAsDone(task:any) {
  task.done=true;
  console.log("zrobione "+task.title);
  const index = this.tasks.indexOf(task);
  if (index > -1) {
    this.tasks.splice(index, 1);
  }
}
  tasks: any[] = [];
  constructor(private todoService: ToDoService) {
  }
  ngOnInit(): void {
  this.tasks = this.todoService.getTasks();
  }

}
