import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/imageServices.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  private tags:string;
  private images:any[];
  processing:boolean = false;

  constructor(private _imageService : ImageService) { }


  searhImages(query:string){


    this._imageService.getImages(query).subscribe(data=>{
      if(!data){
        console.log(data.err);
        console.log('data success nhe huwa');
      }else {
        this.processing =true;
        console.log(data);
        this.images = data.hits;
        console.log('successsssss!');
      }
    });
  }

  ngOnInit() {
  }

}
