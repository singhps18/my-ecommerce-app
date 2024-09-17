import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  nm="";
  em='';
  ph='';
  add='';
  sumbitted:boolean=false
  headingview:boolean=true
qualification=[{school:'',degree:'',year:''}];


addQualification(){
  this.qualification.push({school:'',degree:'',year:''});
  console.log(this.qualification)
}

submitBut(){
  this.sumbitted= true;
  this.headingview=false;
}

editbutton(){
  this.sumbitted =false;
  this.headingview=true;
}
}
