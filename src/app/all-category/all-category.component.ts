import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {

  category:any;
  constructor(private proService: ProductService,) { }

  ngOnInit(): void {
    this.proService.getCategory().subscribe(
      res => {
        this.category = res;
        console.log(this.category);
      },
      err => console.log(err)
    )
  }


  onDelete(id){
    this.proService.delCategory(id).subscribe(
      (res:any) =>{
        alert(res.message);
        // console.log(res)
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }

}
