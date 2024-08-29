import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {

  const _ngxSpinner = inject(NgxSpinnerService);

  _ngxSpinner.show();

  return next(req).pipe(finalize(() => _ngxSpinner.hide()));
};
