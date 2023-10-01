import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:any;
  categoryList:any;

  productData: {
    name: String;
    description: String;
    richDescription: String;
    image: String;
    images: String;
    brand: String;
    price: Number;
    category:any;
    countInStock: Number;
    rating: Number;
    isFeatured: Boolean;
  } 

  constructor(private http: HttpClient, private proService: ProductService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);

    this.proService.getProId(this.id).subscribe(
      (res:any) => {
        console.log(res);
        this.productData = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // imageUpdate(event:any){
  //   this.productData.image = event.target.value;
  //   console.log(event)
  // }

  onSubmit() {
    // this.imageUpdate(event);
    alert('Product Updated')
    console.log(this.productData)
    this.proService.editProduct(this.id, this.productData).subscribe(
      (res) => {
        console.log(res);
        alert('Product Updated')
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
