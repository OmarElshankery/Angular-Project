import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  product: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }
  add(e: any) {
    this.cartService.addProduct(this.product).subscribe((response) => {});
    console.log(this.product);
    window.location.reload();
  }
}
