import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: any;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }
  removeProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe((response) => {
      this.products = this.products.filter(
        (product: any) => product.id != productId
      );
    });
  }
}
