import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async addNewToGallery() {
    try {
      // Take a photo
      const capturedPhoto: Photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });

      // Aquí se maneja la foto que se toma
      // guardarla o mostrarla en la app
      console.log('Captured photo:', capturedPhoto);
      return capturedPhoto; // Optionally return the captured photo
    } catch (error) {
      console.error('Error capturing photo:', error);
      throw error; // Optionally rethrow the error
    }
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
