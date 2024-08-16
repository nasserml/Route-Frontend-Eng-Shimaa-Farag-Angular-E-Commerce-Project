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

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent, canActivate:[autGuard]},
    {path:'cart', component: CartComponent, canActivate:[autGuard]},
    {path:'brands', component: BrandComponent, canActivate:[autGuard]},
    {path:'products', component: ProductsComponent, canActivate:[autGuard]},
    {path:'productDetails/:productId', component: ProductDetailsComponent, canActivate:[autGuard]},
    {path:'categories', component: CategoriesComponent, canActivate:[autGuard]},
    {path:'login', component: LoginComponent,},
    {path:'register', component: RegisterComponent},
    {path:'**', component: NotfoundComponent}
 
];
