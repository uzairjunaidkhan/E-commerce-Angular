import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css'],
})
export class AllOrderComponent implements OnInit {
  
  order: any;
  constructor(private proService: ProductService) {}

  ngOnInit(): void {
    this.proService.getOrder().subscribe(
      (res) => {
        this.order = res;
        console.log(this.order);
      },
      (err) => console.log(err)
    );
  }

  onDelete(id) {
    this.proService.delOrder(id).subscribe(
      (res: any) => {
        alert(res.message);
        // console.log(res)
        this.ngOnInit();
      },
      (err) => console.log(err)
    );
  }
}
