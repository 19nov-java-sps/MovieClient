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

  allUsers: User[] = [];
  users: User[] = [];
  totalPage: number = 1;
  curPage: number = 1;

  searchCondition: string = '';

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers()
      .subscribe((allUsers)=>{
        this.allUsers = allUsers;
        this.totalPage = Math.ceil(this.allUsers.length / 10);
        this.users = this.allUsers.slice(this.curPage * 10 - 10, this.curPage * 10);
      });
  }

  nextPage() {
    this.curPage++;
    this.users = this.allUsers.slice(this.curPage * 10 - 10, this.curPage * 10);
  }

  prevPage() {
    this.curPage--;
    this.users = this.allUsers.slice(this.curPage * 10 - 10, this.curPage * 10);
  }

  search() {
    if (this.searchCondition === '') {
      this.getAllUsers();
    } else if (Number(this.searchCondition)) {
      let condition = Number(this.searchCondition);
      this.userService.getUsers()
      .subscribe((allUsers)=>{
        this.allUsers = allUsers.filter(user => user.userId === condition);
        this.users = this.allUsers.slice(0, 10);
        this.totalPage = Math.ceil(this.allUsers.length / 10);
        this.curPage = 1;
      });
    } else if (this.searchCondition.includes(' ')) {
      this.userService.getUsers()
      .subscribe((allUsers)=>{
        this.allUsers = allUsers.filter(user => {
          return (user.firstName + ' ' + user.lastName).toLowerCase() === this.searchCondition.toLowerCase();
        });
        this.users = this.allUsers.slice(0, 10);
        this.totalPage = Math.ceil(this.allUsers.length / 10);
        this.curPage = 1;
      });
    } else {
      this.userService.getUsers()
      .subscribe((allUsers)=>{
        this.allUsers = allUsers.filter(user => {
          return user.firstName.toLowerCase() === this.searchCondition.toLowerCase() || user.lastName.toLowerCase() === this.searchCondition.toLowerCase();
        })
        this.users = this.allUsers.slice(0, 10);
        this.totalPage = Math.ceil(this.allUsers.length / 10);
        this.curPage = 1;
      });
    }

  }

}
