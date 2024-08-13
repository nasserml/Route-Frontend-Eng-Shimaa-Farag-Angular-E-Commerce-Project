import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../../shared/services/validation.service';
import { LoadingService } from '../../../shared/services/loading.service';
import { ErrorService } from '../../../shared/services/error.service';
import { SendData } from '../../../shared/interface/send-data';
import { GetErrMsg } from '../../../shared/interface/get-err-msg';
import { GetIsLoading } from '../../../shared/interface/get-is-loading';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit, SendData, GetErrMsg, GetIsLoading {


  registerForm!:FormGroup;

  constructor(
    private _auth:AuthService, 
    private router:Router, 
    private validationService:ValidationService,
    private loadingService:LoadingService,
    private errorService: ErrorService)
    {}

  ngOnInit(): void {
   
    this.registerForm = this.validationService.createRegisterForm();

    this.errorService.clearErrorMessage();
  }


  sendData():void{
    this.loadingService.setLoading(true);

    console.log(this.registerForm)
    

    this._auth.register(this.registerForm.value).subscribe({
      next: (response) => {
        if(response.message == 'success') {

          this.router.navigate(['/login']);
          this.loadingService.setLoading(false);

        }
      },
      error: (err) => {
        console.log('error',err);
        this.errorService.setErrorMessage(err.error.message);
        this.loadingService.setLoading(false);
      },
      complete: () =>{
        console.log('complete')
        this.loadingService.setLoading(false);
      }
    });
  }

  getIsLoading(): boolean {
    return this.loadingService.isLoading();
  }

  getErrMsg():string{
    return this.errorService.getErrorMessage();
  }

  

}
