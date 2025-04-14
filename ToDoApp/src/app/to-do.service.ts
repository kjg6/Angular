import { Injectable } from '@angular/core';
interface Task{
  title: string;
  description?: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private tasks: Task[] = [];

  addTask(title: string, description?: string): void {
    this.tasks.push({
      title,
      description,
      completed: false
    });
    console.log("dodano zadanie "+title);
  }
  getTasks(): Task[] {
    return this.tasks;
  }

  constructor() { }
}
