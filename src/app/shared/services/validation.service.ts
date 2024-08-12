import { Injectable } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  createRegisterForm():FormGroup{
    return new FormGroup({

      name:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
      rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[1250][0-9]{8}$/)])

    });
  }

  createLoginForm():FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{8}$/)])
    })
  }
}
