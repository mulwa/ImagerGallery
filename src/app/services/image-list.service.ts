import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ImageGallery } from './../models/ImageGallery';
import { Injectable } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';
import 'firebase/storage';


@Injectable()
export class ImageListService {
  private uid:string;

  constructor(private afAth:AngularFireAuth, private db:AngularFireDatabase) {
    this.afAth.authState.subscribe((auth) =>{
      if(auth !== undefined && auth !==null){
        this.uid = auth.uid;
      }
    });
   }
   getImages(){
     return this.db.list<ImageGallery>('Uploads').valueChanges();
   }

}
