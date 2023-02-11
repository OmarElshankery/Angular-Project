import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  productId: any;
  count = 0;
  product: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe((response) => {
      this.product = response;
    });
  }
  add() {
    this.count++;
  }
}
