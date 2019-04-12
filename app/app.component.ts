import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn:boolean,
  checkedInDate?: number,
  children: Child[] | null
}
@Component({
  selector: 'app-root',
  styleUrls:['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>

      <ul *ngFor = "let pas of passengers; let i = index;">
        <li>
          <span class="status"
          [ngClass]="{
            'checked-in' : pas.checkedIn,
            'checked-out' : !pas.checkedIn
          }">
          </span>
        {{i}}: {{pas.fullname}}
        <p>{{pas | json}}</p>
        <div class="date">
          check in date: 
            {{ pas.checkedInDate ? (pas.checkedInDate | date: 'yMMMMd'): 'Not checked in'}}
        </div>
        <div class="children">
          Children: {{pas.children?.length || 0}}
        </div>
        </li>
      </ul>

    </div>
  `
})

export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname:'Stephen',
    checkedIn: true,
    checkedInDate: 1490742000000,
    children: null
  },{
    id:2,
    fullname:'Rose',
    checkedIn:true,
    checkedInDate: 1490742050000,
    children: [{name: 'Ted', age: 12 },{name: 'Cloe', age:7}]
  },{
    id:3,
    fullname:'James',
    checkedIn:false,
    children: [{name: 'Eric', age: 13}]
  }]

  title: string;
  name: string = "";
  handleClick(value: string){
    console.log(value);
  }
  handleChange(value: string){
    this.name = value;
  }
  constructor(){
    this.title="Ultimate Angular";
  }
}