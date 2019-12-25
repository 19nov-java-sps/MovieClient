import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    let token = sessionStorage.getItem('auth');
    if (!token) {
      this.router.navigate(['']);
    } else {
      let manager = token.split(':')[1];
      if (manager === 'false') {
        this.router.navigate(['home']);
      }
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
