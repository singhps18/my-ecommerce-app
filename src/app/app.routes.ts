import { Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', title: 'Home', component: HomeComponent },
    { path: 'services', title: 'Services', component: ServiceComponent },
    { path: 'about', title: 'About', component: AboutComponent },
    { path: 'contact', title: 'Contact', component: ContactComponent },
];
