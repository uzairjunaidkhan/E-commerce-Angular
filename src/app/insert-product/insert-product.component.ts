import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  email:String="";
  password:String="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
