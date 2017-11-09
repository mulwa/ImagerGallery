import { ImageGallery } from './../models/ImageGallery';
import { Upload } from './../models/upload';
import { Injectable } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase,AngularFireObject, AngularFireList} from 'angularfire2/database';
import { FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database-deprecated"; 
import * as firebase from 'firebase';

@Injectable()
export class UploadServiceService {
  private basePath = '/Uploads';
  private uploads :AngularFireList<ImageGallery>;

  constructor(private ngFire:AngularFireModule, private db: AngularFireDatabase) { }

  uploadFile(upload:Upload){
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot)=>{
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;

    }, (error)=>{
      // upload error has occured
      console.log(error);
    },():any =>{
      upload.url = uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      // upload.$key;      
      this.saveData(upload);
    });    
  }
  private saveData(upload:Upload){
    this.db.list(`${this.basePath}/`).push(upload).then((sucesss)=>{
       console.log('file saved:!'+upload.url);
    },(error) =>{
       console.log(error);
    });
   
  }

}
