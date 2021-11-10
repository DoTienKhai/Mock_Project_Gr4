import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../CoreModule/interfaces/profile';
import { User } from '../CoreModule/interfaces/user.class';
import { AuthenticationService } from '../CoreModule/services/auth-service/authentication.service';
import { UserService } from '../CoreModule/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile= new Profile;
  currentUser=new User;
  constructor(public userService:UserService,
    public activeRoute:ActivatedRoute,
    public router:Router,
    public authenticationService:AuthenticationService) { 
      this.authenticationService.currentUser.subscribe((x:any) =>{
        this.currentUser = x['user'];
      }) 
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data=>{
      this.userService.getProfile(data['user']).subscribe((res:any)=>{
        this.userProfile=res['profile'];
      })
    })
  }
  getArticleByAuthor() {
    this.router.navigate(['/profile', this.userProfile?.username,'author'])
  }

  getArticleByFavorite() {
    this.router.navigate(['/profile', this.userProfile?.username,'favorited'])
  }

}
