import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../CoreModule/interfaces/user.class';
import { AuthenticationService } from '../CoreModule/services/auth-service/authentication.service';
import { Match } from './custom-validator';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  currentUser = new User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }
  settingsForm = this.fb.group({
    username: [this.currentUser.username, [Validators.required]],
    email: [this.currentUser.email, [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(8)]],
    confirmPassword: ['', [Validators.minLength(8)]],
    image: [this.currentUser.image],
    bio: [this.currentUser.bio]
    }, {
      validators: [Match('password', 'confirmPassword')]
    })
  
  errorMessages = [];

  get username() {
    return this.settingsForm?.get('username');
  }
  get email() {
    return this.settingsForm?.get('email');
  }
  get image() {
    return this.settingsForm?.get('image');
  }
  get bio() {
    return this.settingsForm?.get('bio');
  }

  get password() {
    return this.settingsForm?.get('password');
  }
  get confirmPassword() {
    return this.settingsForm?.get('confirmPassword');
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(
      (data:any) => {
        this.username?.setValue(data['user'].username);
        this.email?.setValue(data['user'].email);
        this.image?.setValue(data['user'].image);
        this.bio?.setValue(data['user'].bio);
      });
  }

  updateUser() {
    this.currentUser = {
      username: this.username?.value,
      email: this.email?.value,
      image: this.image?.value,
      bio: this.bio?.value
    };
    if (this.password?.value !='') {
      this.currentUser.password = this.password?.value;
    }
    this.authenticationService.updateUser(this.currentUser).subscribe(
      user => this.router.navigate(['']),
    )
    console.log(this.currentUser);
  }

 


}
