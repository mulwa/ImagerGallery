import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  user:Observable<firebase.User>;
  constructor( private afAuth: AngularFireAuth,private router:Router){
    this.user = this.afAuth.authState;
  }
  canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot){
    return this.user.map((auth)=>{
      if(!auth){
        this.router.navigateByUrl('/login');
        return false;        
      }
      return true;
    }).take(1);
  }
    
}
