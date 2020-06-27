import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../user.model';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit,OnDestroy {

  constructor(private userService:UserService) { }
  private userSub: Subscription;
  e:String=""
  currentUser:User;
  ngOnInit() {
    this.currentUser=this.userService.getUser();
    this.e=this.currentUser.experience;
    this.userSub=this.userService.getUpdatedUser().subscribe((user)=>{
      this.currentUser=user;
    })
  }
  onSubmit(form: NgForm){

    if(form.invalid){
      return;
    }
    else{
      this.userService.modifyExp(this.currentUser,form.controls.experience.value);
    }
    //console.log("User saved");
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  

}
