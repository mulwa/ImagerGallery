import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ImageGallery } from './../../models/ImageGallery';
import { Observable } from 'rxjs/Observable';
import { ImageListService } from './../../services/image-list.service';
import { Component, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit,OnChanges {
  images:any;

  constructor( private imagervice:ImageListService) {

   }

  ngOnInit() {
    this.images = this.imagervice.getImages();
    console.log(this.images);
  }
  ngOnChanges() {
    this.images = this.imagervice.getImages();
  }


}
