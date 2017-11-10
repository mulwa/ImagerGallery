import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import * as Geofire from 'geofire';
import {BehaviorSubject} from  'rxjs/BehaviorSubject';
import * as firebase from 'firebase';


@Injectable()
export class MapService {
  dbRef:any;
  geoFire:any;
  
  hits = new BehaviorSubject([]);
  

  constructor(private db: AngularFireDatabase) { 
    this.dbRef= this.db.list('/locations');
    this.geoFire = new Geofire(this.dbRef);
  }
  /// Adds GeoFire data to database
   setLocation(key:string, coords: Array<number>) {
     this.geoFire.set(key, coords)
         .then(_ => console.log('location updated'))
         .catch(err => console.log(err))
   }

   // Queries database for nearby locations
   /// Maps results to the hits BehaviorSubject
   getLocations(radius: number, coords: Array<number>) {
    this.geoFire.query({
      center: coords,
      radius: radius
    })
    .on('key_entered', (key, location, distance) => {
      let hit = {
        location: location,
        distance: distance
      }
      let currentHits = this.hits.value
      currentHits.push(hit)
      this.hits.next(currentHits)
    })
   }

   

}
