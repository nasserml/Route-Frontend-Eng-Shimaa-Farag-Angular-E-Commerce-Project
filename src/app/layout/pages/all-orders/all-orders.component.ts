import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent implements OnInit {

  constructor(private cartService:CartService) {

  }

  ngOnInit(): void {
    this.cartService.clearUserCart().subscribe({
      next: (res)=>{

        this.cartService.cartItemNumber.next(0);


        console.log(res);

      },
      error: (error)=>{
        console.log(error);
      }
    })
    
  }

}
