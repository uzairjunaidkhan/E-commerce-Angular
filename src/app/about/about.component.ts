import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  btn1(){
    this.http.get("http://localhost:5000/api/user/list").subscribe(
    data => {
      console.log(data);
    });
  }
  btn2(){
    this.http.get("http://localhost:5000/api/order/list").subscribe(
    data => {
      console.log(data);
    });
  }
}
