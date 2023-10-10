import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {}

  rowData2:any;
  rowData3:any;
  
  rowData:any;
  rowData1:any;
  
  ngOnInit(){

  this.http.get("http://localhost:5000/api/product/get/featured/:5").subscribe(
    data => {
      this.rowData3 = data;
      // this.rowData3 = this.rowData2;
      // console.log(this.rowData3);
    });
    
  }

}
