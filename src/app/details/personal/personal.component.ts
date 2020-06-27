import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../user.model';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private userService:UserService) { }
  private userSub:Subscription;
  fname:String="";
  lname:String="";
  currentUser:User;
  ngOnInit() {
    this.currentUser=this.userService.getUser();
    this.fname=this.currentUser.firstname;
    this.lname=this.currentUser.lastname;
    this.userSub=this.userService.getUpdatedUser().subscribe((user)=>{
      this.currentUser=user;
    })
  }

  onSubmit(form: NgForm){

    if(form.invalid){
      return;
    }
    else{
      this.userService.modifyUser(this.currentUser,form.controls.firstname.value,form.controls.lastname.value)
    }
    //console.log("User saved");
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
