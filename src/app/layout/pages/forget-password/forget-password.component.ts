import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResetCodeComponent } from "../reset-code/reset-code.component";
import { ResetPasswordComponent } from "../reset-password/reset-password.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TwAlertComponent } from "../../additions/tw-alert/tw-alert.component";
import { TwDangerComponent } from "../../additions/tw-danger/tw-danger.component";

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterLink, ResetCodeComponent, ResetPasswordComponent, ReactiveFormsModule, TwAlertComponent, TwDangerComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  errorMsg!:string;
  isBtnLoading:boolean = false;

  steps:number = 1;
  email!:string;

  private readonly _auth = inject(AuthService);
  private _toastr = inject(ToastrService);

  

  verifyEmail: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })


  emailSubmit(){
    this.isBtnLoading = true
    this.email = this.verifyEmail.value.email;
    this._auth.verifyEmail(this.verifyEmail.value).subscribe({
      next: (res) => {
        if(res.statusMsg == 'success') {

          this._toastr.success(res.message); 
          this.steps = 2;
        this.isBtnLoading = false 

        }
      },
      error: (error) => {
        this.errorMsg = 'Network error';
        console.log(error);
        this.isBtnLoading = false
      }
    

    })
  }



  

}
