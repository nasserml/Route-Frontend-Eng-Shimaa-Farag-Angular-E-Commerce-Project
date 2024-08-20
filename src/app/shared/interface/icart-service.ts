import { Observable } from "rxjs";

export interface ICartService {
    addProductToCart(id: string) : Observable<any>;
    deleteProductInCart(id:String):Observable<any>;
    getCartProduct():Observable<any>;
    updateProductInCart(id:string,count:number):Observable<any>;
    clearUserCart():Observable<any>;
}
