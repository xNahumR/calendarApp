import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  createTask(date: string) {
    // Here, you can implement the logic to create a task
    console.log('Task created for date:', date);
    // You might want to perform actions like storing the task in a database, etc.
  }
}
