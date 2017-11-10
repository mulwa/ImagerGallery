import { MapService } from './../../services/map.service';
import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat:number;
  lng:number;

  markers: any;
  subscription: any

  constructor(private geoService: MapService) {
    this.subscription = this.geoService.hits
    .subscribe(hits => this.markers = hits);
    
   }

  ngOnInit() {
    this.getUserLocation();
    this.seedDatabase();
  }
  OnDestroy(){
    this.subscription.unsubscribe()
  }
  
  getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat);

        this.geoService.getLocations(100, [this.lat, this.lng]);

      });
    }
  }
  private seedDatabase() {
  let dummyPoints = [
    [37.9, -122.1],
    [38.7, -122.2],
    [38.1, -122.3],
    [38.3, -122.0],
    [38.7, -122.1]
  ]
  dummyPoints.forEach((val, idx) => {
    let name = `dummy-location-${idx}`
    console.log(idx)
    this.geoService.setLocation(name, val)
  })
  console.log("database  seeded");
}


}
