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
  searchCondition: string = '';

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers()
      .subscribe((allUsers)=>{
        this.users = allUsers;
    });
  }

  search() {
    if (this.searchCondition === '') {
      this.getAllUsers();
    } else if (Number(this.searchCondition)) {
      let condition = Number(this.searchCondition);
      this.userService.getUsers()
      .subscribe((allUsers)=>{
        this.users = allUsers.filter(user => user.userId === condition);
      });
    } else if (this.searchCondition.includes(' ')) {
      this.userService.getUsers()
      .subscribe((allUsers)=>{
        this.users = allUsers.filter(user => {
          return (user.firstName + ' ' + user.lastName).toLowerCase() === this.searchCondition.toLowerCase();
        });
      });
    } else {
      this.userService.getUsers()
      .subscribe((allUsers)=>{
        this.users = allUsers.filter(user => {
          return user.firstName.toLowerCase() === this.searchCondition.toLowerCase() || user.lastName.toLowerCase() === this.searchCondition.toLowerCase();
        })
      });
    }

  }

}
