import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:any;
  b=[{fname:"priyanka", lname:"lingala", email:"priyanka@gmail.com",course:"html"},
    { fname: "priya", lname: "ling", email: "priy@gmail.com", course: "css" },
    { fname: "pri", lname: "lin", email: "priya@gmail.com", course: "html" }]
  fun(b){
    this.b.push({fname: b.fname, lname: b.lname, email: b.email, course: b.course});

  }
}
