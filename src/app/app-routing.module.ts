import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './AuthModule/login/login.component';
import { SignupComponent } from './AuthModule/signup/signup.component';
import { AuthGuard } from './CoreModule/services/auth-service/auth.guard';
import { HomeComponent } from './HomeModule/home.component';
import { ProfileComponent } from './ProfileModule/profile.component';
import { SettingComponent } from './SettingModule/setting.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path:'register',
    component:SignupComponent
  },
  {
    path:'profile/:user',
    redirectTo:'profile/:user/author',
    pathMatch: 'full'
  },
  { path: 'profile/:user/:filter',component:ProfileComponent },
  {path:'setting',component:SettingComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
