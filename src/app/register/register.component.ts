import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:String="";
  email:String="";
  password:String="";
  phone:Number=91;
  street:String="";
  apartment:String="";
  zip:String="";
  city:String="";
  country:String="";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.email, this.password)
  }

}
