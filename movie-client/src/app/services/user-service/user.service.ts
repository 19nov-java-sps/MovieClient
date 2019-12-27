import { Injectable } from '@angular/core';

import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from 'src/app/models/users';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://54.234.113.103:8080/PBJCinema/users/';

  user: Users = new Users();

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getUserById(idParam: number){
    return this.http.get<User>(this.url+idParam).toPromise();
  }

  updateUser(userId, email, password, firstName, lastName) {

    this.user.emailAddress = email;
    this.user.lastName = lastName;
    this.user.firstName = firstName;
    this.user.password = password;

    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    this.http.post(this.url+'update/'+userId, this.user, httpOption).subscribe(
      (response) => {
        console.log(response);
        return true;
      },
      (error) => console.log(error)
    );

    return true;
  }
 
  createUser(email, password, firstName, lastName) {

    this.user.emailAddress = email;
    this.user.lastName = lastName;
    this.user.firstName = firstName;
    this.user.password = password;

    this.http.post(this.url, this.user, {observe: 'response'}).subscribe(
    (response) => {
      console.log(response);
      this.authService.login(email, password);
    },
      (error) => console.warn(error)
    );
    
    setTimeout(() => {
      if (sessionStorage.getItem('auth')) {
        this.router.navigate(['home']);
      } else {
        console.log('Failed!');
      }
    }, 3000)
  }

  
}
