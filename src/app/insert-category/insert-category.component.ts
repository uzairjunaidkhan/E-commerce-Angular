import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent implements OnInit {

  category:{
    name,
    icon,
    optional
  } = {
    name : "",
    icon : "",
    optional: ""
  };
  constructor(private http: HttpClient, private proService: ProductService) {}

  ngOnInit(): void {
  }

  onSubmit(){
    this.proService.addCategory(this.category).subscribe(
      (res:any) =>{
        // console.log(res);
        alert(`Category created \n Name: ${res.name} \n Id ${res.id}`)
      },
      err => console.log(err)
    )
  }

}
