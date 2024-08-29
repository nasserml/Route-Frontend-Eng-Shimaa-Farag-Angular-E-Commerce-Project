import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { BrandComponent } from './layout/pages/brand/brand.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { NotfoundComponent } from './layout/additions/notfound/notfound.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { autGuard } from './shared/guard/aut.guard';
import { ProductDetailsComponent } from './layout/additions/product-details/product-details.component';
import { CheckoutComponent } from './layout/pages/checkout/checkout.component';
import { AllOrdersComponent } from './layout/pages/all-orders/all-orders.component';
import { ForgetPasswordComponent } from './layout/pages/forget-password/forget-password.component';
import { logoutGuard } from './shared/guard/logout.guard';
import { ProductsSearchComponent } from './layout/pages/products-search/products-search.component';
import { WishListComponent } from './layout/pages/wish-list/wish-list.component';
import { cartGuard } from './shared/guard/cart.guard';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent, canActivate:[autGuard], title:'Home'},
    {path:'cart', component: CartComponent, canActivate:[autGuard], title:'Cart'},
    {path:'brands', component: BrandComponent, canActivate:[autGuard], title:'Brands' },
    {path:'products', component: ProductsSearchComponent, canActivate:[autGuard], title:'Products'},
    {path:'productDetails/:productId', component: ProductDetailsComponent, canActivate:[autGuard]},
    {path:'categories', component: CategoriesComponent, canActivate:[autGuard], title:'Categories'},
    {path:'checkout', component: CheckoutComponent, canActivate:[autGuard, cartGuard], title:'Check Out'},
    {path:'allorders', component: AllOrdersComponent, canActivate:[autGuard], title:'All Orders'},
    {path:'wishlist', component: WishListComponent, canActivate:[autGuard], title:'Wish List'},
    {path:'login', component: LoginComponent,title:'Login', canActivate: [logoutGuard]},
    {path:'forget-password', component: ForgetPasswordComponent,title:'Forget Password', canActivate: [logoutGuard]},
    {path:'register', component: RegisterComponent, title:'Register', canActivate:[logoutGuard]},
    {path:'**', component: NotfoundComponent, title:'Not Found'},
 
];
