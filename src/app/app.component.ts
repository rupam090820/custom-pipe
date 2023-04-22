
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-pipes';
  presentdate = new Date();
  user=[{
    name:'rupam saha',city:'kolkata',code:70051,dob:new Date("05/12/2000"),gender:'male'
  },
  {
    name:'rupa das',city:'kolkata',code:70051,dob:new Date("09/12/2001"),gender:'female'
  },
  {
    name:'avijeet paul',city:'kolkata',code:70051,dob:new Date("12/12/2012"),gender:'male'
  },
  {
    name:'ankita paul',city:'kolkata',code:70051,dob:new Date("12/12/2012"),gender:'female'
  }];
}
