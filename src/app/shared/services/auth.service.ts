import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

interface User {
  email: string;
  password: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = `${environment.googleAuth.googleApi}/accounts:signInWithPassword?key=`;
  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(
    private authService: SocialAuthService,
    private http: HttpClient
    ) { }

  // Google signin
  signInWithGoogle(): Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  // Email, password signin
  signInUsingEmailPassword(data: User): any {
    return this.http.post(`${this.apiUrl}${environment.googleAuth.webApi}`, data);
  }

// Saving access token after successful auth.
 authenticateUser(authData: any): void {
  localStorage.setItem('token', JSON.stringify(authData.idToken));
  localStorage.setItem('user', JSON.stringify({ displayName: authData.displayName, email: authData.email }));
  this.isAuthenticated$.next(true);
 }

 // Check the user loggedin or not.
 isAuthenticated(): boolean {
   const token = localStorage.getItem('token');
   return token && token.length ? true : false;
 }

 // Get user details from localstorage
 userDetails(): any {
  const userDetails = localStorage.getItem('user');
  return userDetails;
 }

 // return auth status observable
 authStatusObservable(): Observable<boolean> {
   return this.isAuthenticated$.asObservable();
 }

 // Sign out user
  signOut(): Promise<any> {
    localStorage.clear();
    this.isAuthenticated$.next(false);
    return this.authService.signOut();
  }

}
