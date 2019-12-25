import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();
  userId: number;

  email: string = '';
  password: string = '';
  confirmPass: string = '';
  firstName: string = '';
  lastName: string = '';

  oldEmail: string = '';
  oldPassword: string = '';
  oldFirstName: string = '';
  oldLastName: string = '';

  success: boolean = false;
  noChange: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userId = Number(sessionStorage.getItem('auth').split(':')[0]);
    this.getUser(this.userId);
  }

  getUser(idParam: number) {
    this.userService.getUserById(idParam)
      .then((response)=>{
        this.user = response;

        if (!this.user.userId) {
          sessionStorage.clear();
          this.router.navigate(['']);
        } else {
          this.oldEmail = this.user.emailAddress;
          this.oldPassword = this.user.password;
          this.oldFirstName = this.user.firstName;
          this.oldLastName = this.user.lastName;
    
          this.email = this.oldEmail;
          this.firstName = this.oldFirstName;
          this.lastName = this.oldLastName;
        }
      })
      .catch((e)=>{
        console.warn(e);
      })
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

  validateUpdate() {
    if (this.password) {
      if (!(this.validatePassword() && this.validateConfirmPass())) {
        return false;
      }
    }
    return this.validateEmail() && this.validateFirstName() && this.validateLastName();
  }

  nameFormat(name: string) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  }

  uniqueEmail() {
    if (this.email !== this.oldEmail) {
      return this.email !== 'abc@gmail.com';
    }
    return true;
  }

  updateUser() {
    if (this.email === this.oldEmail && this.firstName == this.oldFirstName && this.lastName === this.oldLastName && (!this.password || this.password === this.oldPassword)) {
      this.noChange = true;
      setTimeout(() => this.noChange = false, 3000);
    } else if (this.validateUpdate() && this.uniqueEmail()) {
      if (!this.password) this.password = this.oldPassword;
      if (this.userService.updateUser(this.user.userId, this.email, this.password, this.nameFormat(this.firstName), this.nameFormat(this.lastName))) {
        this.password = '';
        this.confirmPass = '';
        this.success = true;
        this.getUser(this.userId);
        setTimeout(() => this.success = false, 3000);
      }
    }
  }

  home() {
    this.router.navigate(['home']);
  }


}
