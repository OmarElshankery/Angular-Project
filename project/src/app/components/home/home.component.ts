import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response)=>{
      this.products=response;
    })
  }
}
