import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string = '';
  password: string = '';
  confirmPass: string = '';
  firstName: string = '';
  lastName: string = '';

  success: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  validateEmail() {
    return /^\w+@\w+\.\w{2,4}$/.test(this.email);
  }

  validatePassword() {
    return this.password.length >= 8 && this.password.length <= 16;
  }

  validateConfirmPass() {
    return this.confirmPass === this.password;
  }

  validateFirstName() {
    return /^([a-zA-z]){1,20}$/.test(this.firstName);
  }

  validateLastName() {
    return /^([a-zA-z]){1,20}$/.test(this.lastName);
  }

  validateSignUp() {
    return this.validateEmail() && this.validatePassword() && this.validateConfirmPass() && this.validateFirstName() && this.validateLastName();
  }

  nameFormat(name: string) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  }

  uniqueEmail() {
    return this.email !== 'abc@gmail.com';
  }

  signUp() {
    if (this.validateSignUp() && this.uniqueEmail()) {
      if (this.userService.createUser(this.email, this.password, this.nameFormat(this.firstName), this.nameFormat(this.lastName))) {
        this.success = true;
        setTimeout(() => this.router.navigate(['home']), 3000);
      }
    }
  }

  main() {
    this.router.navigate(['']);
  }

}
