import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = "http://localhost:5000/api/product/list"
  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get(this.products)
  }

}
