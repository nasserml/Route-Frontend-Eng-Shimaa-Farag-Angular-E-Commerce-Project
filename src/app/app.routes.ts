import { Routes } from '@angular/router';
import { autGuard } from './shared/guard/aut.guard';
import { logoutGuard } from './shared/guard/logout.guard';
import { cartGuard } from './shared/guard/cart.guard';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', loadComponent: ()=>import('./layout/pages/home/home.component').then(c=>c.HomeComponent), canActivate:[autGuard], title:'Home'},
    {path:'cart', loadComponent: ()=>import('./layout/pages/cart/cart.component').then(c=>c.CartComponent), canActivate:[autGuard], title:'Cart'},
    {path:'brands', loadComponent: ()=>import('./layout/pages/brand/brand.component').then(c=>c.BrandComponent), canActivate:[autGuard], title:'Brands' },
    {path:'products',loadComponent:()=>import('./layout/pages/products/products.component').then(c=>c.ProductsComponent), canActivate:[autGuard], title:'Products'},
    {path:'productDetails/:productId', loadComponent: ()=>import('./layout/additions/product-details/product-details.component').then(c=>c.ProductDetailsComponent), canActivate:[autGuard]},
    {path:'categories', loadComponent: ()=>import('./layout/pages/categories/categories.component').then(c=>c.CategoriesComponent), canActivate:[autGuard], title:'Categories'},
    {path:'checkout', loadComponent: ()=>import('./layout/pages/checkout/checkout.component').then(c=>c.CheckoutComponent), canActivate:[autGuard, cartGuard], title:'Check Out'},
    {path:'allorders', loadComponent: ()=>import('./layout/pages/all-orders/all-orders.component').then(c=>c.AllOrdersComponent), canActivate:[autGuard], title:'All Orders'},
    {path:'wishlist', loadComponent: ()=>import('./layout/pages/wish-list/wish-list.component').then(c=>c.WishListComponent), canActivate:[autGuard], title:'Wish List'},
    {path:'login', loadComponent: ()=>import('./layout/pages/login/login.component').then(c=>c.LoginComponent),title:'Login', canActivate: [logoutGuard]},
    {path:'forget-password', loadComponent: ()=>import('./layout/pages/forget-password/forget-password.component').then(c=>c.ForgetPasswordComponent),title:'Forget Password', canActivate: [logoutGuard]},
    {path:'register', loadComponent: ()=>import('./layout/pages/register/register.component').then(c=>c.RegisterComponent), title:'Register', canActivate:[logoutGuard]},
    {path:'settings', loadChildren:()=>import('./layout/pages/modules/settings/settings.module').then(c=> c.SettingsModule) },
    {path:'**', loadComponent: ()=>import('./layout/additions/notfound/notfound.component').then(c=>c.NotfoundComponent), title:'Not Found'},
 
];
