import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css'],
})
export class InsertProductComponent implements OnInit {
  file:any;
  categoryList:any;

  productData: {
    name: any;
    description: any;
    richDescription: any;
    image: any;
    images: any;
    brand: any;
    price: any;
    category: any;
    countInStock: any;
    rating: any;
    isFeatured: any;
  } = {
    name: '',
    description: '',
    richDescription: '',
    image: '',
    images: '',
    brand: '',
    price: 0,
    category: '',
    countInStock: 0,
    rating: 0,
    isFeatured: false
  }

  constructor(private http: HttpClient, private proService: ProductService) {}

  ngOnInit(): void {
    this.proService.getCategory().subscribe(
      res => {
        this.categoryList = res;
        console.log(this.categoryList);
      },
      err => console.log(err)
    )
  }
  onChangefile(event:any){
    this.file = event.target.files[0];
    console.log(this.file)
  }

  onSubmit() { 
    const  formdata = new  FormData();
    formdata.append('name', this.productData.name)
    formdata.append('description', this.productData.description)
    formdata.append('richDescription', this.productData.richDescription)
    formdata.append('image', this.file)
    formdata.append('brand', this.productData.brand)
    formdata.append('price', this.productData.price)
    formdata.append('category', this.productData.category)
    formdata.append('countInStock', this.productData.countInStock)
    formdata.append('rating', this.productData.rating)
    formdata.append('isFeatured ', this.productData.isFeatured)
    
    this.proService.addProduct(formdata).subscribe(
      (res) => {
        // console.log(res);
        alert('Product Saved')
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
 