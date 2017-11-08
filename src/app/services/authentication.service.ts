import { Iuser } from './../models/user';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {
  user:Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth) { 
    this.user = afAuth.authState;
  }
  login(user:Iuser){
   return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  }
  loginWithGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }
  loginWithFacebook(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider);
  }
  logout(){
    return this.afAuth.auth.signOut();
  }
  authUser(){
    return this.user;
  }

}
