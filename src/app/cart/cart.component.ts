import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient) {}

  rowData2:any;
  rowData3:any;
  
  rowData:any;
  rowData1:any;
  
  ngOnInit(){

  // this.http.get("https://fakestoreapi.com/carts/5").subscribe(
  //   data => {
  //     this.rowData = data;
  //     this.rowData1 = this.rowData;
  //     // console.log(this.rowData);
  //   });

  this.http.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20").subscribe(
    data => {
      this.rowData2 = data;
      this.rowData3 = this.rowData2;
      // console.log(this.rowData3);
    });
    
  }

}
