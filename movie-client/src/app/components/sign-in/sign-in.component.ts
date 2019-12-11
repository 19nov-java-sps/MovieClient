import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userName: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  signIn() {
    console.log(this.userName, this.password);
  }
}
