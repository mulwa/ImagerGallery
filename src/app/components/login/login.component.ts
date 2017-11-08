import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import *  as firebase from 'firebase/app'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string;

  constructor(private authservice: AuthenticationService,private router:Router) {

   }

  ngOnInit() {
  }
  loginWithGoogle(){
    this.authservice.loginWithGoogle().then(resolve => this.router.navigate(['gallery']))
    .catch(error => {
      this.errorMessage = error.message,
      console.log(this.errorMessage);
    });
  }
  loginWithFacebook(){
    this.authservice.loginWithFacebook().then(resolve => this.router.navigate(['gallery']))
    .catch(error => {
      this.errorMessage = error.message;
      console.error(this.errorMessage);
    });
  }

}
