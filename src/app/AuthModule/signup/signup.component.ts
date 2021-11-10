import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MessageService } from 'src/app/CoreModule/services/auth-service/message.service';
import { UserService } from 'src/app/CoreModule/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  img:string="assets/images/register.svg";
  signupForm!:FormGroup;
  constructor(public router:Router,public fb:FormBuilder,
    public messageService:MessageService,
    public userService:UserService,
    public messaageSerive:MessageService) { }

  ngOnInit(): void {
    this.createForm();
  }
  public createForm(){
    this.signupForm=this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
  public movetoSignin(){
    this.router.navigate(["login"]);
  }
  public get f(){
    return this.signupForm.controls;
  }
  public savesignupForm(){
    this.userService.register(this.signupForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.messaageSerive.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.messaageSerive.error(error);
            });
  }

}
