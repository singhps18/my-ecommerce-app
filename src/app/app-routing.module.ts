import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'homecom', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
 
]

@NgModule({
  declarations:[],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
