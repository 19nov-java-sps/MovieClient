import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { appendFile } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8080/PBJCinema/login';
  result: User = null;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      })};




      let url = "http://localhost:8080/PBJCinema/login";
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url);
	xhr.onreadystatechange = function(){
		if(this.readyState === 4 && this.status===200){
      // set authorization in our browser for future request
      
		//	let auth = xhr.getResponseHeader("Authorization");
		//	sessionStorage.setItem("token", auth);
     window.location.href="http://www.google.com";
      
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
console.log(emailAddress);
	
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
	
	let requestBody = `emailaddress=${emailAddress}&password=${pass}`;
	
	xhr.send(requestBody);

  }
}
