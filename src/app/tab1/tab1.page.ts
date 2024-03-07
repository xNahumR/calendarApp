import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

export class Tab1Page{

  constructor(private photoService: PhotoService) { 

  }

      // Method to add a photo to the gallery
      addPhotoToGallery() {
        // Call the method from PhotoService
        this.photoService.addNewToGallery(); 
      }

}
