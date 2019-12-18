import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:8080/PBJCinema/users';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getUserById(idParam: number){
    return this.http.get<User>(this.url + '/' + idParam).toPromise();
  }
  createUser(email, password, firstName, lastName) {
    console.log(email + password + firstName + lastName);
    return true;
  }
  updateUser(email, password, firstName, lastName) {
    console.log(email + password + firstName + lastName);
    return true;
  }
}
