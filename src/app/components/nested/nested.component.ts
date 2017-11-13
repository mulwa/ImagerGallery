import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
  private links:any;

  // @Input() message:any;

  message:any ="from the child";

  @Output() myeventEmiter = new EventEmitter<string>();


  constructor() { 
    this.links = [ 'Home','Services','Portfolio','contacts'];  
  }

  ngOnInit() {
  }
  sendKey($event){
    this.myeventEmiter.emit(this.message);
    console.log($event);    
  }

}
