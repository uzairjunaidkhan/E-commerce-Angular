import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id:any;

  category:{
    name,
    icon,
    optional
  } = {
    name : "",
    icon : "",
    optional: ""
  };

  constructor(private http: HttpClient, private proService: ProductService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);

    this.proService.getCatId(this.id).subscribe(
      (res:any) => {
        // console.log(res);
        this.category = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.proService.editCategory(this.id, this.category).subscribe(
      (res) => {
        // console.log(res);
        alert('Category Updated')
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
