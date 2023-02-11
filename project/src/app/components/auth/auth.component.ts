import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  loginForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-z]{4,15}$/),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  get getName() {
    return this.loginForm.controls['name'];
  }
  get getEmail() {
    return this.loginForm.controls['email'];
  }
  get getPassword() {
    return this.loginForm.controls['password'];
  }
  login() {
    if (
      this.loginForm.status == 'VALID' &&
      this.getName.value == 'admin' &&
      this.getEmail.value == 'admin@gmail.com' &&
      this.getPassword.value == 'admin'
    ) {
      this.router.navigate(['/dashboard']);
      console.log(this.loginForm.value);
    } else {
      this.router.navigate(['/']);
    }
  }
}
