import { MapComponent } from './../../components/map/map.component';
import { SignUpComponent } from './../../components/sign-up/sign-up.component';
import { AuthenticationGuard } from './../../services/authentication.guard';
import { ImageDetailsComponent } from './../../components/image-details/image-details.component';
import { ImageuploadsComponent } from './../../components/imageuploads/imageuploads.component';
import { ImageListComponent } from './../../components/image-list/image-list.component';
import { LoginComponent } from './../../components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { MainRouteRoutingModule } from './main-route-routing.module';
// import { t} from './../components/sign-up/sign-up.component';



const mainRoutes:Routes = [
  {path:'login',component :LoginComponent},
  { path:'gallery',component :ImageListComponent,canActivate:[AuthenticationGuard]},
  { path: 'upload', component: ImageuploadsComponent,canActivate:[AuthenticationGuard]},
  { path: 'imageDetais/:id', component:ImageDetailsComponent,canActivate:[AuthenticationGuard]},
  { path: 'signup',component:SignUpComponent},
  { path: 'map', component:MapComponent},
  { path: '', redirectTo: '/login',pathMatch: 'full'}

];



@NgModule({
  imports: [
    CommonModule,
    MainRouteRoutingModule,
    RouterModule.forRoot(mainRoutes)
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ]
})
export class MainRouteModule { }
