import { Component } from '@angular/core';
import { ProductService } from 'src/app/components/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productId:any
  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }
  loginForm = new FormGroup({
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  get getImage() {
    return this.loginForm.controls['image'];
  }
  get getName() {
    return this.loginForm.controls['name'];
  }
  get getPrice() {
    return this.loginForm.controls['price'];
  }
  get getDescription() {
    return this.loginForm.controls['description'];
  }
  login() {
    if (this.loginForm.status == 'VALID') {
      if (this.productId) {
        this.productService
          .editProduct(this.productId, this.loginForm.value)
          .subscribe((response) => {
            console.log(response);
          });
        this.router.navigate(['/dashboard']);
      } else {
        this.productService.addProduct(this.loginForm.value).subscribe((response) => {
          console.log(response);
        });
      }
    } else {
      console.log('Error');
    }

  }
}
