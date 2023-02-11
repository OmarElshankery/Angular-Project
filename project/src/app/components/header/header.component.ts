import { Component, OnInit } from '@angular/core';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  counter: any;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getAllProducts().subscribe((response) => {
      this.counter = response;
      console.log(this.counter);
    });
  }
}
