import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: string;
  password: string;
  failed: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('auth')) {
      this.router.navigate(['home']);
    }
  }

  signIn() {
    this.authService.login(this.email, this.password);
    
    setTimeout(() => {
      if (sessionStorage.getItem('auth')) {
        this.router.navigate(['home']);
      } else {
        this.failed = true;
        setTimeout(() => this.failed = false, 3000);
      }
    }, 1000)
  }

  main() {
    this.router.navigate(['']);
  }
}
