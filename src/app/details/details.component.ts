import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private userSub:Subscription;
  constructor(private userService:UserService) { }
  currentUser:User;
  ngOnInit() {
    // this.username=localStorage.getItem('username');
    this.currentUser=this.userService.getUser();
    this.userSub=this.userService.getUpdatedUser().subscribe((user)=>{
      this.currentUser=user;
    })
  }
  
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
