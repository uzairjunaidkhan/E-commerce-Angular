import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute) { }

  id:any;
  rowData4:any;
  rowData5:any;

  value:Number=1;

  ngOnInit(): void {
    
      this.id=this.route.snapshot.params['id'];
      // console.log(this.id);
      this.findId()
  }
  change(){
    console.log(this.value)
  }
  findId(){
    this.http.get("https://fakestoreapi.com/products/"+this.id).subscribe(
    data => {
      this.rowData4 = data;
      this.rowData5 =this.rowData4;
      // console.log(this.rowData5)
      // console.log(JSON.stringify(this.rowData2));
    });
  }
}
