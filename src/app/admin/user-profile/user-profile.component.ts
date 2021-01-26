import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../services/models';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: UserProfile[];


  constructor(
    private userService: UsersService 
    ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers().subscribe(users => {
      this.users = users as UserProfile[];
      console.log(users);
    })
  }

  deleteUser(user: UserProfile){
    this.users.splice(this.users.indexOf(user), 1);
  }

}