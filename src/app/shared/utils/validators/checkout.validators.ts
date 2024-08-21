import { Validators } from "@angular/forms";



export const checkoutValidators = {
    details: [Validators.required, Validators.minLength(3)],
    phone: [Validators.required, Validators.pattern(/^01[1250][0-9]{8}$/)],
    city: [Validators.required, Validators.minLength(3)]
}