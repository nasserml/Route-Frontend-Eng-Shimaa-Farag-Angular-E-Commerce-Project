import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    rePassword: new FormControl(null),
    phone: new FormControl(null)

  });

  constructor(private _auth:AuthService){}

  sendData():void{
    
    this._auth.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log('error',err);
      },
      complete: () =>{
        console.log('complete')
      }
    })

  }

}
