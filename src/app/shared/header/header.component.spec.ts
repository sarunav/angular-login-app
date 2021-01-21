import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';

import { HeaderComponent } from './header.component';
import { AuthService } from './../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

xdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [SocialAuthService, AuthService],
      imports: [ FormsModule, ReactiveFormsModule ]
    })

    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
