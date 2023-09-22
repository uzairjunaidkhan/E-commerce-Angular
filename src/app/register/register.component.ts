import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerData: {
    username: String;
    email: String;
    password: String;
    phone: Number;
    street: String;
    apartment: String;
    zip: String;
    city: String;
    country: String;
  } = {
    username: '',
    email: '',
    password: '',
    phone: 91,
    street: '',
    apartment: '',
    zip: '',
    city: '',
    country: '',
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.registerUser(this.registerData).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login'])
      },
      (err) => console.log(err)
    );
  }
}
