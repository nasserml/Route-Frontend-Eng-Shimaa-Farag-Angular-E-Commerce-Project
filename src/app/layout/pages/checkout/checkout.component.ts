import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from '../../../shared/services/payment.service';
import { CartService } from '../../../shared/services/cart.service';
import { ResponseSubscribeCheckout } from '../../../shared/interface/response-subscribe-checkout';
import { ValidationService } from '../../../shared/services/validation.service';
import { TwDangerComponent } from "../../additions/tw-danger/tw-danger.component";
import { TwAlertComponent } from "../../additions/tw-alert/tw-alert.component";


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, TwDangerComponent, TwAlertComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  isBtnLoading:boolean = false;
  errorMsg:string = '';
  cartId!:string;

  checkoutForm!:FormGroup 
  constructor(private _payment:PaymentService, private _cart:CartService, private validationService:ValidationService) {}

  ngOnInit(): void {

    this.checkoutForm = this.validationService.createCheckOutForm();

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
    console.log(this.checkoutForm)

    this._payment.checkout(this.cartId, this.checkoutForm.value).subscribe({
      next:(response:ResponseSubscribeCheckout)=>{
        this.isBtnLoading = true;
        window.location.href = response.session.url
      },
      error:(error) =>{
        console.log(error)
        this.errorMsg = 'error'

      }
    })



  }
}
