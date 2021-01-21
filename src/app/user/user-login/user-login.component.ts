import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any;
  submitted = false;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
   }

  ngOnInit(): void {
  }

  // Get method for form controls
  get f(): any {
    return this.loginForm.controls;
  }

  // Submit button click event
  onSubmit(): any {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.signInUsingEmailPassword(this.loginForm.value)
    .subscribe((res: SocialUser) => {
      this.user = res;
      this.authService.authenticateUser(res);
      this.router.navigate(['/']);
      this.isLoading = false;
    }, err => {
      console.log('err---', err);
      this.isLoading = false;
    });
  }

  // Sign in using google
  signInWithGoogle(): any {
    this.isLoading = true;
    this.authService.signInWithGoogle()
    .then((res: SocialUser) => {
      this.isLoading = false;
      this.user = res;
      this.authService.authenticateUser(res);
      this.router.navigate(['/']);
    })
    .catch((error) => {
      this.isLoading = false;
      console.log('-err-', error);
    });
  }

}
