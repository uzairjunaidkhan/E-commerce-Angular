import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) {}

  canActivate():boolean{
    if(!this.auth.getToken()){
      this.router.navigate([''])
      return false
    }
    if(this.auth.decodedToken() == true){
      return true
    }
    else{
      this.router.navigate([''])
      return false  
    }

  }
  
}
