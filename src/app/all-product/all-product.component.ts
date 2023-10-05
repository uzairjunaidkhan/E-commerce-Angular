import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  product:any;
  constructor(private proService: ProductService,) { }

  ngOnInit(): void {
    this.proService.getProduct().subscribe(
      res => {
        this.product = res;
        console.log(this.product);
      },
      err => console.log(err)
    )
  }

  onDelete(id){
    this.proService.delProduct(id).subscribe(
      (res:any) =>{
        alert(res.message);
        // console.log(res)
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }

}
