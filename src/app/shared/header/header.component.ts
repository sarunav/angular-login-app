import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userDetails: any;
  subscription$: any;
  authenticated = false;

  constructor(
    private authService: AuthService,
    public router: Router
    ) {
    this.subscription$ = this.authService.authStatusObservable()
    .subscribe((res: any) => {
      this.userDetails = JSON.parse(this.authService.userDetails());
      this.authenticated = this.authService.isAuthenticated();
    });
  }

  ngOnInit(): void {
  }

  logOut(): any {
    this.router.navigate(['/user/login']);
    this.authService.signOut()
    .then((res: any) => {
    })
    .catch((error) => {
      console.log('sign-out-err-', error);
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
