import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  user:any;
  constructor(private proService: ProductService) { }

  ngOnInit(): void {
    this.proService.getUser().subscribe(
      res => {
        this.user = res;
        console.log(this.user);
      },
      err => console.log(err)
    )
  }

  onDelete(id){
    this.proService.delUser(id).subscribe(
      (res:any) =>{
        alert(res.message);
        // console.log(res)
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }

}
