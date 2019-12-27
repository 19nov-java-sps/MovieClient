import { Injectable, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
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

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
    observe: "response" as "body"
  };

  private auth: string;
  private token: string;
  url: string = 'http://localhost:8080/PBJCinema/login';
  result: User = new User();

  constructor(private http: HttpClient) { }

  login(email: string, password: string)  {
   
    this.user.emailAddress = email;
    this.user.password = password;
    
    this.http.post(this.url, this.user,this.httpOptions).subscribe(
      (response) => {
        this.auth = (response["headers"].get("Authorization"));
        sessionStorage.setItem("token", this.auth);
        this.token = sessionStorage.getItem("token");
        console.log(response);
      },
      (error) => console.warn(error)
    );
  
    // return this.token;
    return '2:true'
  }
}