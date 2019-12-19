import { Injectable } from '@angular/core';

import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { Users } from '../../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://34.205.129.232:8080/PBJCinema/users';
  
  user: Users = {
    firstName:" ",
    lastName: " ",
    emailAddress:" ",
    password: " "



  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(idParam: number){
    return this.http.get<User>(this.url + '/' + idParam).toPromise();
  }

  updateUser(email, password, firstName, lastName) {

    console.log(email + password + firstName + lastName);
    return true;
  }
 
  createUser(email, password, firstName, lastName) {

    this.user.emailAddress=email;
    this.user.lastName=lastName;
    this.user.firstName=firstName;
    this.user.password=password;


  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  headers.append('Access-Control-Allow-Origin', '*')

  this.http.post(this.url,this.user).subscribe(
  (response) => console.log(response),
  (error) => console.log(error)
);
return true;

}

  updateUser(email, password, firstName, lastName) {


    console.log(email + password + firstName + lastName);
    return true;
  }

  
}