import { Injectable } from '@angular/core';

import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ConfirmPasswordValidator } from '../utils/confirm-password-validator.utils';
import { RegisterValidators } from '../utils/validators/register.validators';
import { LoginValidators } from '../utils/validators/login.validators';
import { checkoutValidators } from '../utils/validators/checkout.validators';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {


  constructor() { }

  createRegisterForm():FormGroup{
    return new FormGroup({

      name:new FormControl(null,RegisterValidators.name),
      email: new FormControl(null, RegisterValidators.email),
      password: new FormControl(null, RegisterValidators.password),
      rePassword: new FormControl(null, RegisterValidators.rePassword),
      phone: new FormControl(null, RegisterValidators.phone)

    }, ConfirmPasswordValidator.validate );
  }



  createLoginForm():FormGroup {
    return new FormGroup({
      email: new FormControl(null, LoginValidators.email),
      password: new FormControl(null, LoginValidators.password)
    });
  }


  createCheckOutForm():FormGroup {
    return new FormGroup({
      details: new FormControl(null, checkoutValidators.details),
      phone: new FormControl(null, checkoutValidators.phone),
      city: new FormControl(null, checkoutValidators.city)
    });
  }



}
