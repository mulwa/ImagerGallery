import { UploadServiceService } from './../../services/upload-service.service';
import { Upload } from './../../models/upload';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-imageuploads',
  templateUrl: './imageuploads.component.html',
  styleUrls: ['./imageuploads.component.css']
})
export class ImageuploadsComponent{
  files:FileList;
  upload:Upload;

  constructor(private uploadService: UploadServiceService) { }

  handleFiles(event){
    this.files = event.target.files;
    

  }

  uploadFiles(){
    const filesToUpload = this.files;
    const filesIndex =_.range(filesToUpload.length);
    _.each(filesIndex,(index) =>{
      // console.log(filesToUpload[index]);
      this.upload = new Upload(filesToUpload[index]);
      this.uploadService.uploadFile(this.upload);
    });
  }

  

}
