import { Injectable } from '@angular/core';

import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { Users } from '../../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      })};

	let xhr = new XMLHttpRequest();
	xhr.open("POST", this.url);
	xhr.onreadystatechange = function(){
		if(this.readyState === 4 && this.status===200){
      // set authorization in our browser for future request
      
		//	let auth = xhr.getResponseHeader("Authorization");
		//	sessionStorage.setItem("token", auth);
     
      
      /*
			if(tokenArr[1]=="General"){
				window.location.href="http://localhost:8080/ERS/employee";
			}
			else{
				window.location.href="http://localhost:8080/ERS/manager";
			}
*/
			
		}
		if(this.readyState === 4 ){
			console.log(this);
		}
	}
	let emailAddress = email;
  let pass = password;
  let firstname=firstName;
  let lastname=lastName;


	
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
	
	let requestBody = `emailaddress=${emailAddress}&password=${pass}&firstname=${firstname}&lastname=${lastname}`;
	
	xhr.send(requestBody);

  window.location.href="localhost:4200/home"




}
    
}
  
/*
  updateUser(this.email, this.password, this.firstName, this.lastName) {


    console.log(email + password + firstName + lastName);
    return true;
  }

  */
