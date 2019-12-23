import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('auth')) {
      this.router.navigate(['']);
    } else {
      let userId = Number(sessionStorage.getItem('auth').split(':')[0]);
      
      this.userService.getUserById(userId)
      .then((response)=>{
        this.user = response;
      })
      .catch((e)=>{
        console.warn(e);
        this.logout();
      })
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  main() {
    this.router.navigate(['']);
  }

}
