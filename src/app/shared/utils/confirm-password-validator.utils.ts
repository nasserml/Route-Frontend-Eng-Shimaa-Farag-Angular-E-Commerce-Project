import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class ConfirmPasswordValidator {
    static validate:ValidatorFn = (control: AbstractControl): ValidationErrors |null =>{
        const password = control.get('password')?.value;
        const rePassword = control.get('rePassword')?.value;
        return password == rePassword ? null : {mismatch: true};
        
    }
}