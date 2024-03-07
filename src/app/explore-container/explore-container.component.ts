import { Component, Input } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})

export class ExploreContainerComponent {

  constructor(private photoService: PhotoService) {}

  // Method to add a photo to the gallery
  addPhotoToGallery() {
    // Call the method from PhotoService
    this.photoService.addNewToGallery(); 
  }

}
