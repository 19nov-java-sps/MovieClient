import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { Users } from '../../models/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:8080/PBJCinema/users';
  
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

 
 
 
  createUser(email, password, firstName, lastName) {


/*
    this.user.firstName=firstName,
this.user.lastName=lastName,
this.user.emailAddress=email,
this.user.password=password
    console.log(email + password + firstName + lastName);
  
    this.http.post.arguments(firstName,lastName,email,password);
  */





 // return this.http.post<Users>(this.url,this.user);
   




}
    
}
  
/*
  updateUser(this.email, this.password, this.firstName, this.lastName) {


    console.log(email + password + firstName + lastName);
    return true;
  }

  */
