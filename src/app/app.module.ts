import { UploadServiceService } from './services/upload-service.service';
import { AuthenticationService } from './services/authentication.service';
import { MainRouteModule } from './routes/main-route/main-route.module';
import { AuthenticationGuard } from './services/authentication.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ImageuploadsComponent,
    FooterComponent,
    ImageDetailsComponent,
    ImageListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MainRouteModule
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    UploadServiceService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
