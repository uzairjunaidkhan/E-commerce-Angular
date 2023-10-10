import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private proService: ProductService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  rowData3: any[] = [];

  totalQuantity: Number = 0;
  proQuantity: any[] = [];

  productID: any;
  userId: any;
  userData: any;

  items: any;

  order: {
    orderItems: any;
    shippingAddress1: any;
    shippingAddress2: any;
    city: any;
    zip: any;
    country: any;
    phone: any;
    user: any;
  } = {
    orderItems: [],
    shippingAddress1: '',
    shippingAddress2: '',
    city: '',
    zip: '',
    country: '',
    phone: 92,
    user: '',
  };

  ngOnInit() {
    this.proService.cart.forEach((item) => {
      console.log(`Quantity: ${item.quantity}, Product ID: ${item.product}`);

      this.proQuantity.push(item.quantity);
      console.log(this.proQuantity)
      this.totalQuantity = this.totalQuantity+item.quantity;

      this.productID = item.product;

      //orderitem
      this.items = this.proService.cart;
      // console.log(this.proService.cart);
      
      //order product detail
      this.proService.getProId(item.product).subscribe((data: any[]) => {
        this.rowData3.push(data);
      });
    
    });

    this.userId = this.auth.getUserId();
    this.proService.getUserId(this.userId).subscribe(
      (res) => {
        this.userData = res;
        // console.log(res);
      },
      (err) => alert(err)
    );
  }
  //////
  
  onChange(newValue: any, index: number) {
    // this.proQuantity[index] = newValue;
    this.proService.cart[index].quantity = newValue; 
    this.totalQuantity = this.proQuantity.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  onCheckOut() {
    this.order.orderItems = this.items;
    this.order.shippingAddress1 = this.userData.street;
    this.order.shippingAddress1 = this.userData.street;
    this.order.city = this.userData.city;
    this.order.zip = this.userData.zip;
    this.order.country = this.userData.country;
    this.order.phone = this.userData. phone;
    this.order.user = this.userData.id;

    // console.log(this.order);
    this.proService.addOrder(this.order).subscribe(
      (res) => {
        alert("Thank For Shopping");
        console.log(res);
      },
      (err) =>  console.log(err)
    );
  }
}
 