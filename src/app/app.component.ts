import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-login-app';
  subscription$: any;
  authenticated = false;

  constructor(private authService: AuthService) {
    this.subscription$ = this.authService.authStatusObservable()
    .subscribe((res: any) => {
      this.authenticated = this.authService.isAuthenticated();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
