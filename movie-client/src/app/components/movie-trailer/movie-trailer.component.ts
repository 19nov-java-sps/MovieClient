import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css']
})
export class MovieTrailerComponent implements OnInit {

  token: string = '';
  login: boolean = false;
  manager: boolean = false;

  constructor() { }

  ngOnInit() {
    this.token = sessionStorage.getItem('auth');

    if (this.token) {
      let tokenArr = this.token.split(':');

      this.login = !!tokenArr[0];
      this.manager = tokenArr[1] === 'true';
    } else {
      this.login = false;
      this.manager = false;
    }
  }

  logout() {
    sessionStorage.clear();
    this.token = '';
    this.login = false;
    this.manager = false;
  }

}
