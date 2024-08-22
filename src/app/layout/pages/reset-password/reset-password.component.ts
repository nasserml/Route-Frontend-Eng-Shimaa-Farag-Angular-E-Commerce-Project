import { Component, inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TwDangerComponent } from "../../additions/tw-danger/tw-danger.component";
import { TwAlertComponent } from "../../additions/tw-alert/tw-alert.component";

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, TwDangerComponent, TwAlertComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {

  isBtnLoading: boolean = false;
  errorMsg!: string;

  @Input() email!:string;
  private readonly _auth = inject(AuthService);
  private _title = inject(Title);
  private _toastr = inject(ToastrService);
  private _router = inject(Router);

  values:any = {};




  resetPassword: FormGroup = new FormGroup({
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
    confirmNewPassword: new FormControl(null, [Validators.required]),
  }, this.validatePass);

  validatePass(control:AbstractControl): ValidationErrors | null {
    return control.get('newPassword')?.value == control.get('confirmNewPassword')?.value ? null : {mismatch: true};
  }

  



  ngOnInit(): void {
    
    this._title.setTitle('Reset Password');
    this.values.email = this.email;
    
  }

  resetSubmit(){
    this.isBtnLoading = true
    this.values.newPassword = this.resetPassword.value.newPassword;
    this._auth.resetPassword(this.values).subscribe({
      next:(res)=>{

        this.isBtnLoading = false;
        localStorage.setItem('userToken', res.token);
        this._toastr.success('Password Reset Successfully');
        this._auth.userInformation();
        this._router.navigate(['/home']);

      },
      error: (error)=>{
        this.errorMsg = 'Network error';
        this.isBtnLoading = false;

        console.log(error)
      }
    })
    

  }

}
