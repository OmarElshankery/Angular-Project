import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'auth',component:AuthComponent},
  {path:'products',component:ProductsComponent},
  {path:'add',component:AddProductComponent},
  {path:'add/:id',component:AddProductComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'product-page/:id',component:ProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
