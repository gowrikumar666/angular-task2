import { Injectable } from '@angular/core';
import { Images } from './images';
import { Image } from './images-mock';


@Injectable({
  providedIn: 'root'
})
export class DiscoverserviceService {
  visibleImages = [{}];

  constructor() { }

  /* getimage(){
    this.visibleImages = Image;

  } */
  getimage(): Images[] {
    return Image;
  }
   
}
