import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  errMsg:string ='';
  isLoading:boolean = false;

  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
    rePassword: new FormControl(null, [Validators.required, ]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[1250][0-9]{8}$/)])

  });

  constructor(private _auth:AuthService, private router:Router){}


  sendData():void{
    this.isLoading= true;

    console.log(this.registerForm)
    

    this._auth.register(this.registerForm.value).subscribe({
      next: (response) => {
        if(response.message == 'success') {

          this.router.navigate(['/login']);
          this.isLoading= false;

        }
      },
      error: (err) => {
        console.log('error',err);
        this.errMsg = err.error.message;
        this.isLoading = false
      },
      complete: () =>{
        console.log('complete')
      }
    });
  }

}
