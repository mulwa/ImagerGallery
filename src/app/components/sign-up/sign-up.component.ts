import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // private message:any;
  private message:any;

  constructor() { 
    // this.message = "Message from parent to child";
  }

  ngOnInit() {
  }
  receiveEvent($event){
    this.message = $event;
    
    
  }

}
