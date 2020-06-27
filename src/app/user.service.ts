import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class UserService {

  private userUpdated = new Subject<User>();
  constructor() { }
  newUser:User;
  modifiedUser:User;
  loginUser(u,p){
    if(localStorage.getItem(u)){
      console.log("user already exists");
      this.newUser=JSON.parse(localStorage.getItem(u));
    }
    else{
      this.newUser={
        username:u,
        password:p,
        firstname:"",
        lastname:"",
        experience:""
      }
      localStorage.setItem(u,JSON.stringify(this.newUser))
    }   
  }

  getUser(){
    return this.newUser;
  }

  getUpdatedUser(){
    return this.userUpdated.asObservable();
  }

  modifyUser(u,newfname,newlname){
    this.modifiedUser=u;
    this.modifiedUser.firstname=newfname;
    this.modifiedUser.lastname=newlname;
    console.log(this.modifiedUser);
    localStorage.setItem(u.username,JSON.stringify(this.modifiedUser));
    this.userUpdated.next(this.modifiedUser);
  }

  modifyExp(u,e){
    this.modifiedUser=u;
    this.modifiedUser.experience=e;
    console.log(this.modifiedUser);
    localStorage.setItem(u.username,JSON.stringify(this.modifiedUser));
    this.userUpdated.next(this.modifiedUser);
  }
}
