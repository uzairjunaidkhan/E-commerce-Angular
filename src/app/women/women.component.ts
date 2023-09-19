import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(private http: HttpClient) {}

  rowData2:any;
  rowData3:any;
  
  rowData:any;
  rowData1:any;
  
  ngOnInit(){

  this.http.get("https://restcountries.com/v3.1/all").subscribe(
    data => {
      this.rowData = data;
      this.rowData1 = this.rowData;
      // console.log(this.rowData);
    });

  this.http.get("https://fakestoreapi.com/products").subscribe(
    data => {
      this.rowData2 = data;
      this.rowData3 = this.rowData2;
      // console.log(this.rowData3);
    });
    
  }

}
