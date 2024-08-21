import { Validators, ValidatorFn } from "@angular/forms";


export class LoginValidators{
    static email:ValidatorFn[] = [Validators.required, Validators.email];
    static password:ValidatorFn[] = [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)];    
}

