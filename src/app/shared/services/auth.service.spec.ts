import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SocialAuthService } from 'angularx-social-login';

import { AuthService } from './auth.service';

xdescribe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule],
      providers: [SocialAuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have getData function', () => {
  //   const service: myService = TestBed.get(myService);
  //   expect(service.getData).toBeTruthy();
  //  });
});
