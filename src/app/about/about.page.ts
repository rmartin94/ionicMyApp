import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../services/photo.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  providers: [PhotoService]
})
export class AboutPage {

  constructor(private photoService: PhotoService) {

  }

  takePicture() {
    this.photoService.takePicture();
  }

  get gallery(): Photo[] {
    return this.photoService.photos;
  }

}
