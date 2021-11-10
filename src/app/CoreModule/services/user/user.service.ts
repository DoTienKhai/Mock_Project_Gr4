import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="https://api.realworld.io/";
  constructor(public http:HttpClient) { }
  register(user: any) {
    return this.http.post(this.baseUrl+'api/users',{"user":user} );
  }
  getProfile(name:string){
    return this.http.get(this.baseUrl+'api/profiles/'+name)
  }
}
