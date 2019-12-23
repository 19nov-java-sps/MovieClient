import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import{Users} from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Users = {
    firstName:" ",
    lastName: " ",
    emailAddress:" ",
    password: " "

  };

  url: string = 'http://34.205.129.232:8080/PBJCinema/login';
  result: User = new User();

  constructor(private http: HttpClient) { }

  login(email: string, password: string)  {

    let token = '';
    
    this.user.emailAddress = email;
    this.user.password = password;
    
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    this.http.post(this.url, this.user).subscribe(
      (response) => {
        // console.log(response.headers.get('Authorization'));
        token = '2:true';
        console.log(response);
      },
      (error) => console.warn(error)
    );
  
    token = '2:true';
    return token;
  }
}
