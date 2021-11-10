import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from '../CoreModule/services/auth-service';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
 
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    // SignupComponent
  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
})
export class AuthModule { }