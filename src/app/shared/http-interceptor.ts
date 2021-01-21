import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.sharedService.showLoader();

    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            setTimeout(() => {
            //   this.sharedService.hideLoader();
            }, 1000);
          }
        },
        (err: any) => {
        //   this.sharedService.hideLoader();
        const error = err.error.error.message;
        this.toastr.error(error, 'Error!');
        }
      )
    );
  }
}
