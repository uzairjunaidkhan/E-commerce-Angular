import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getProductById = 'http://localhost:5000/api/product/';
  private deleteProduct = 'http://localhost:5000/api/product/delete/';
  private updateProduct = 'http://localhost:5000/api/product/update/';
  private insertProduct = 'http://localhost:5000/api/product/create/new';
  private products = "http://localhost:5000/api/product/list"
  
  private category = "http://localhost:5000/api/category/list"
  
  private order = "http://localhost:5000/api/order/list"

  constructor(private http:HttpClient) { }

  getProId(id:any){
    return this.http.get(this.getProductById+id)
  }
  delProduct(id:any){
    return this.http.delete(this.deleteProduct+id)
  }
  editProduct(id:any,data:any){
    return this.http.put(this.updateProduct+id, data)
  }
  addProduct(pro:any){
    return this.http.post(this.insertProduct, pro)
  }
  getProduct(){
    return this.http.get(this.products)
  }


  getCategory(){
    return this.http.get(this.category)
  }


}
