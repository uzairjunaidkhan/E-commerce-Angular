import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent implements OnInit {

  email:String="";
  password:String="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
