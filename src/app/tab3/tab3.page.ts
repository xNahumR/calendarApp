import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  selectedDate!: string;

  constructor(private taskService: TaskService) {}

  createTask() {
    console.log('Selected Date:', this.selectedDate);
    this.taskService.createTask(this.selectedDate);
  }
}
