import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CustomerAccountComponent} from "./customer-account/customer-account.component";
import {CustomerSignupComponent} from "./customer-signup/customer-signup.component";
import {CustomerLoginComponent} from "./customer-login/customer-login.component";
import {SupplierAccountComponent} from "./supplier-account/supplier-account.component";
import {SupplierLoginComponent} from "./supplier-login/supplier-login.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Chart'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout'
  },
  {
    path: 'customer-account',
    component: CustomerAccountComponent,
    title: 'Account'
  },
  {
    path: 'customer-signup',
    component: CustomerSignupComponent,
    title: 'Sign Up'
  },
  {
    path: 'customer-login',
    component: CustomerLoginComponent,
    title: 'Log In'
  },
  {
    path: 'supplier-account',
    component: SupplierAccountComponent,
    title: 'Account'
  },
  {
    path: 'supplier-login',
    component: SupplierLoginComponent,
    title: 'Log In'
  },
  {
    path: 'product',
    component: ProductComponent,
    title: 'Product'
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products'
  },
];