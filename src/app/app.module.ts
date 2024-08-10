import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComComponent } from './header-com/header-com.component';
import { FooterComComponent } from './footer-com/footer-com.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser'





@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule,
    HomeComponent,
    HeaderComComponent,
    FooterComComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule ,

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
