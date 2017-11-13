import { MapService } from './services/map.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ImageListService } from './services/image-list.service';
import { UploadServiceService } from './services/upload-service.service';
import { AuthenticationService } from './services/authentication.service';
import { MainRouteModule } from './routes/main-route/main-route.module';
import { AuthenticationGuard } from './services/authentication.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
// import { MatSidenavModule } from '@angular/material';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ImageuploadsComponent } from './components/imageuploads/imageuploads.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ImageListComponent } from './components/image-list/image-list.component';

import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment} from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import 'hammerjs';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {AgmCoreModule} from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { NestedComponent } from './components/nested/nested.component';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ImageuploadsComponent,
    FooterComponent,
    ImageDetailsComponent,
    ImageListComponent,
    LoginComponent,
    SignUpComponent,
    MapComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule, 
    // MatButtonModule,
    // MatCheckboxModule,
    // MatFormFieldModule, 
    // MatSelectModule, 
    MaterializeModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MainRouteModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    UploadServiceService,
    ImageListService,
    MapService  
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
