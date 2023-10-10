import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getProductById = 'http://localhost:5000/api/product/';
  private deleteProduct = 'http://localhost:5000/api/product/delete/';
  private updateProduct = 'http://localhost:5000/api/product/update/';
  private insertProduct = 'http://localhost:5000/api/product/create/new';
  private products = "http://localhost:5000/api/product/list"
  
  private getCatById = 'http://localhost:5000/api/category/';
  private deleteCategory = 'http://localhost:5000/api/category/delete/';
  private updateCategory = 'http://localhost:5000/api/category/update/';
  private insertCategory = 'http://localhost:5000/api/category/create';
  private category = "http://localhost:5000/api/category/list"

  private getUserById = 'http://localhost:5000/api/user/';
  private deleteUser = 'http://localhost:5000/api/user/delete/';
  private updateUser = 'http://localhost:5000/api/user/update/';
  private user = "http://localhost:5000/api/user/list"
  // private insertUser = 'http://localhost:5000/api/category/create';
  

  private getOrdById = 'http://localhost:5000/api/order/';
  private deleteOrder = 'http://localhost:5000/api/order/delete/';
  private updateOrder = 'http://localhost:5000/api/order/update/';
  private insertOrder = 'http://localhost:5000/api/order/create';
  private order = "http://localhost:5000/api/order/list"
  private userOrder = 'http://localhost:5000/api/order/get/userorder/:id';
  private totalSale = 'http://localhost:5000/api/order/get/totalsales';


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


  getCatId(id:any){
    return this.http.get(this.getCatById+id)
  }
  delCategory(id:any){
    return this.http.delete(this.deleteCategory+id)
  }
  editCategory(id:any,data:any){
    return this.http.put(this.updateCategory+id, data)
  }
  addCategory(pro:any){
    return this.http.post(this.insertCategory, pro)
  }
  getCategory(){
    return this.http.get(this.category)
  }


  // here... create functions for them cont...
  getUserId(id:any){
    return this.http.get(this.getUserById+id)
  }
  delUser(id:any){
    return this.http.delete(this.deleteUser+id)
  }
  editUser(id:any,data:any){
    return this.http.put(this.updateUser+id, data)
  }
  getUser(){
    return this.http.get(this.user)
  }

  // here... create functions for them cont...
  getOrdId(id:any){
    return this.http.get(this.getOrdById+id)
  }
  delOrder(id:any){
    return this.http.delete(this.deleteOrder+id)
  }
  editOrder(id:any,data:any){
    return this.http.put(this.updateOrder+id, data)
  }
  addOrder(pro:any){
    return this.http.post(this.insertOrder, pro)
  }
  getOrder(){
    return this.http.get(this.order)
  }
  getUserOrder(id:any){
    return this.http.get(this.userOrder+id)
  }
  getTotalSale(){
    return this.http.get(this.totalSale)
  }

  //Cart
  cart:any[] = [];
  //Search
  private searchQuerySubject = new BehaviorSubject<string>('');
  searchQuery$ = this.searchQuerySubject.asObservable();

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

}
