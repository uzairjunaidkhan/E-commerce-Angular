import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  constructor(
    private proService: ProductService,
    private route: ActivatedRoute
  ) {}

  id: any;
  rowData4: any;

  value: Number = 1;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.findId();
  }


  findId() {
    this.proService.getProId(this.id).subscribe((data) => {
      this.rowData4 = data;
      // console.log(this.rowData4);
    });
  }
  newItem: any;
  addToCart() {
    this.newItem = { quantity: +this.value, product: this.id };
    this.proService.cart.push(this.newItem);
    // this.proService.cart.forEach((item) => {
    //   console.log(`Quantity: ${item.quantity}, Product ID: ${item.productId}`);
    // });
    // console.log(this.proService.cart)
  }
}
