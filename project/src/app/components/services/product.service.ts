import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL="http://localhost:3000/products";
  constructor(private client:HttpClient) { }

  getAllProducts(){
    return this.client.get(this.baseURL);
  }
  getProductById(productId:any){
    return this.client.get(`${this.baseURL}/${productId}`);
  }
  addProduct(product:any){
    return this.client.post(`${this.baseURL}`,product)
  }
  editProduct(productId:any,product:any){
    return this.client.put(`${this.baseURL}/${productId}`,product)
  }
  deleteProduct(productId:any){
    return this.client.delete(`${this.baseURL}/${productId}`)
  }
}
