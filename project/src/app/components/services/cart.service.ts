import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseURL = 'http://localhost:3000/myProducts';

  constructor(private client: HttpClient) {}
  getAllProducts() {
    return this.client.get(this.baseURL);
  }
  addProduct(body: any) {
    return this.client.post(`${this.baseURL}`, body);
  }
  editProduct(product: any) {
    return this.client.put(this.baseURL, product);
  }
  deleteProduct(productId: any) {
    return this.client.delete(`${this.baseURL}/${productId}`);
  }
}
