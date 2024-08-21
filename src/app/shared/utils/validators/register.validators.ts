import { Validators, ValidatorFn } from "@angular/forms";


export class RegisterValidators{
    static name:ValidatorFn[] = [Validators.required,Validators.minLength(3),Validators.maxLength(10)];
    static email:ValidatorFn[] = [Validators.required, Validators.email];
    static password:ValidatorFn[] = [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)];
    static rePassword :ValidatorFn[] = [Validators.required];
    static phone:ValidatorFn[] = [Validators.required, Validators.pattern(/^01[1250][0-9]{8}$/)];
    
}

