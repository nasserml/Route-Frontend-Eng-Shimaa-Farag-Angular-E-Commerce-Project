import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../../shared/services/auth.service';
import { error } from 'console';
import { ResetPasswordComponent } from "../reset-password/reset-password.component";
import { ToastrService } from 'ngx-toastr';
import { TwAlertComponent } from "../../additions/tw-alert/tw-alert.component";
import { TwDangerComponent } from "../../additions/tw-danger/tw-danger.component";

@Component({
  selector: 'app-reset-code',
  standalone: true,
  imports: [ReactiveFormsModule, ResetPasswordComponent, TwAlertComponent, TwDangerComponent],
  templateUrl: './reset-code.component.html',
  styleUrl: './reset-code.component.scss'
})
export class ResetCodeComponent {

  errorMsg!:string;
  isBtnLoading:boolean = false;
  isResentBtnLoading:boolean = false;

  steps:number = 2;



  @Input({required: true}) email!:string;
  private _title = inject(Title);
  private readonly _auth = inject(AuthService);
  private _toastr = inject(ToastrService);


  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern(/^\w{4,10}$/)]),
  })

  ngOnInit(): void {
    

    this._title.setTitle('Reset Code');
    
  }


  codeSubmit() {

    this.isBtnLoading = true;
    this._auth.verifyCode(this.verifyCode.value).subscribe({
      next:(res)=>{

        if(res.status == 'Success'){
          this._toastr.success('Code Verified successfully');
          this.steps = 3;
        
        this.isBtnLoading = false

        }
      },
      error:(error)=>{
        console.log(error);
        this.errorMsg = 'Invalid Code'
        this.isBtnLoading = false
      }
    })

  }

  resendCode() {
    this.isResentBtnLoading = true;
    this._auth.verifyEmail({email:this.email}).subscribe({
      next:(res)=>{
        if(res.statusMsg == 'success') {
          this._toastr.success('Code Resent successfully');

        }
        this.isResentBtnLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isResentBtnLoading = false
      }
    })

  }

}
