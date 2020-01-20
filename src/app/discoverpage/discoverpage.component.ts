import { Component, OnInit } from '@angular/core';
import { DiscoverserviceService } from '../discoverservice.service';
import { Images } from '../images';
import { Image } from '../images-mock';

@Component({
  selector: 'app-discoverpage',
  templateUrl: './discoverpage.component.html',
  styleUrls: ['./discoverpage.component.css']
})
export class DiscoverpageComponent implements OnInit {
  images: Images; 
  visibleImages : any = [{}];
  url: string;
  public items = [{}];
  values = '';

  


  constructor( private discover: DiscoverserviceService) { }



  ngOnInit() {
    this.visibleImages = this.discover.getimage(); 
  }

  additems(Product: any){
    this.items =Product.value

    

  }

  reset(){
    this.items = [{
      Product: "shoes"},
      {Product: "flatshoes"},
      {Product: "heels"

    }]
  }

  search(){
    this.visibleImages = this.visibleImages.filter(res => {
      return res.Image.toLocaleLowerCase().match(this.url.toLocaleLowerCase())
    })
  }

}
