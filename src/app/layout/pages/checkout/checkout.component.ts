import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from '../../../shared/services/payment.service';
import { CartService } from '../../../shared/services/cart.service';
import { ResponseSubscribeCheckout } from '../../../shared/interface/response-subscribe-checkout';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  cartId!:string;

  checkoutForm:FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  });
  constructor(private _payment:PaymentService, private _cart:CartService) {}

  ngOnInit(): void {

    this.getCart();
    
    
  }

  getCart():void {
    this._cart.getCartProduct().subscribe({
      next:(res) =>{

        this.cartId = res.data._id
        console.log(res.data._id)

      },
      error: (error) =>{
        console.log(error);
      }
    })
  }

  submitData():void{
    console.log(this.checkoutForm.value)

    this._payment.checkout(this.cartId, this.checkoutForm.value).subscribe({
      next:(response:ResponseSubscribeCheckout)=>{
        window.location.href = response.session.url
      },
      error:(error) =>{
        console.log(error)

      }
    })



  }
}
