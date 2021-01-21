import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): any {
    const isAuthenticated: boolean = this.authService.isAuthenticated();
    if (isAuthenticated) {
        return true;
    }
    this.router.navigate(['/user/login']);
    return false;
  }

}

