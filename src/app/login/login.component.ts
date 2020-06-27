import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  currentUser:User;
  ngOnInit() {
  }

  onSubmit(form: NgForm){

    if(form.invalid){
      return;
    }
    else{
      this.userService.loginUser(form.controls.username.value,form.controls.password.value);
      this.router.navigate(["/details/personal"]);
    }
    //console.log("User saved");
  }
}
