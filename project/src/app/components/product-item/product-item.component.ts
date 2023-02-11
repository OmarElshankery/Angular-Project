import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products:any
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response)=>{
      this.products=response;
    })
  }
}
