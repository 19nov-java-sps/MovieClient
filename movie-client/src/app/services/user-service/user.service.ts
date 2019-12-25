import { Injectable } from '@angular/core';

import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://34.205.129.232:8080/PBJCinema/users/';

  user: Users = new Users();

  constructor(private http: HttpClient) { }

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

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

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

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    this.http.post(this.url,this.user).subscribe(
    (response) => {
      console.log(response);
    },
      (error) => console.warn(error)
    );

    return '30:false';
  }

  
}