import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  selectedDate: string | null | undefined = null; // Update type to allow undefined
  alertButtons = ['Action'];

  constructor(private navCtrl: NavController, private router: Router, private alertController: AlertController,private taskService: TaskService) { }

  // Function to handle date selection
  onDateSelected(date: string | string[] | null | undefined) {
    if (date) {
      if (Array.isArray(date)) {
        this.selectedDate = date[0]; // Use the first element of the array
      } else {
        this.selectedDate = date; // Otherwise, assign the single string value
      }
    } else {
      this.selectedDate = null; // Handle case when no date is selected
    }
  }

  async addEvent() {
    if (this.selectedDate) {
      // Navigate to AddEventPage and pass the selected date as a query parameter
      this.router.navigate(['/add-event'], { queryParams: { date: this.selectedDate } });
    } else {
      // Handle case when no date is selected
      console.log('Please select a date before adding an event.');
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please select a date before adding an event.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
  }


  highlightedDates=[
    {
      date:'2024-03-22',
      textColor:'#800080',
      backgroundColor:'#ffc0cb',
    },
    {
      date:'2024-03-21',
      textColor:'#800080',
      backgroundColor:'#ffc0cb',
    },
    {
      date:'2024-03-22',
      textColor:'#800080',
      backgroundColor:'#ffc0cb',
    },
    {
      date:'2024-03-23',
      textColor:'#800080',
      backgroundColor:'#ffc0cb',
    },
    {
      date:'2024-03-24',
      textColor:'#800080',
      backgroundColor:'#ffc0cb',
    },
    {
      date:'2024-03-25',
      textColor:'#800080',
      backgroundColor:'#ffc0cb',
    },
  ];

  selectedDate2!: string;

  createTask() {
    console.log('Selected Date:', this.selectedDate2);
    this.taskService.createTask(this.selectedDate2);
  }
}
