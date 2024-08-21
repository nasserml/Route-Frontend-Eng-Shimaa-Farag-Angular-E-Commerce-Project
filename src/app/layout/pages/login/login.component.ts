import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../../shared/services/validation.service';
import { LoadingService } from '../../../shared/services/loading.service';
import { ErrorService } from '../../../shared/services/error.service';
import { SendData } from '../../../shared/interface/send-data';
import { GetErrMsg } from '../../../shared/interface/get-err-msg';
import { GetIsLoading } from '../../../shared/interface/get-is-loading';
import { TwAlertComponent } from '../../additions/tw-alert/tw-alert.component';
import { TwDangerComponent } from '../../additions/tw-danger/tw-danger.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, TwAlertComponent, TwDangerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit , SendData, GetErrMsg, GetIsLoading{

  loginForm!:FormGroup; 

  constructor(
    private _auth:AuthService,
    private router:Router,
    private validationService:ValidationService,
    private LoadingService: LoadingService,
    private errorService: ErrorService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.validationService.createLoginForm();

    this.errorService.clearErrorMessage();
  }

  sendData(): void {
      this.LoadingService.setLoading(true);

      console.log(this.loginForm);

      this._auth.login(this.loginForm.value).subscribe({
        next:(response) => {
          if(response.message == 'success') {
            localStorage.setItem('userToken', response.token);
            this._auth.userInformation();
            this.router.navigate(['/home']);
            this.LoadingService.setLoading(false);
          }

        }, 
        error:(err) =>{
          console.log('error', err);
          this.errorService.setErrorMessage(err.error.message);
          this.LoadingService.setLoading(false);
        }, 
        complete: ()=> {
          console.log('complete');
        }
      })
  }
 

  getIsLoading():boolean {
    return this.LoadingService.isLoading();
  }

  getErrMsg():string {
    return this.errorService.getErrorMessage();
  }

  

}
