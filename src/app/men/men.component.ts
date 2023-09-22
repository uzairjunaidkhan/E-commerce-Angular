import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  rowData3:any;
  constructor(private proService: ProductService) { }

  ngOnInit(): void {
    this.proService.getProduct().subscribe(
      res => 
      {
        console.log(res);
        this.rowData3=res;
      },
      err => console.log(err)
    )
  }

}
