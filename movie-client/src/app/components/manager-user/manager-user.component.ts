import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.css']
})
export class ManagerUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[] = [];

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((allUsers)=>{
        this.users = allUsers;
    });
  }

}
