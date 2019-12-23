import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: string = '';
  login: number = 0;
  manager: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    setInterval(() => this.getToken(), 1000);
  }

  getToken() {
    this.token = sessionStorage.getItem('auth');

    if (this.token) {
      let tokenArr = this.token.split(':');

      this.login = Number(tokenArr[0]);
      this.manager = Boolean(tokenArr[1]);
    } else {
      this.token = '';
      this.login = 0;
      this.manager = false;
    }
  }

  logout() {
    sessionStorage.clear();
    this.token = '';
    this.login = 0;
    this.manager = false;
    this.router.navigate(['']);
  }

  main() {
    this.router.navigate(['']);
  }

}
