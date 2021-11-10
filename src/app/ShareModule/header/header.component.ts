import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/CoreModule/services/auth-service/authentication.service';
import { User } from 'src/app/CoreModule/interfaces/user.class';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  img:string=''
  currentUser=new User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe((x:any) =>{
       this.currentUser = x['user'];
       this.img=x['user']?.image+'';
    });

   }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
