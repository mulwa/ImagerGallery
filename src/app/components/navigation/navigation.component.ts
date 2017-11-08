import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user:Observable<firebase.User>;
  errorMessage:string;

  constructor(private authservice: AuthenticationService, private router:Router) {

   }

  ngOnInit() {
    this.user = this.authservice.authUser();
  }
  logOut(){
    this.authservice.logout().then(resolve =>{
      this.router.navigate(['/login'])
      .catch(error=>{
        this.errorMessage = error.message;
        console.error(this.errorMessage);
        
      })
    })
  }

}
