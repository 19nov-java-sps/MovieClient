import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8080/PBJCinema/login';
  result: User = null;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //   })};
    
    // const formData = new FormData();
    // formData.append('emailaddress', email);
    // formData.append('password', password);
    
    // this.http.post(this.url, formData, httpOptions)
    //                     .subscribe(
    //                         (res) => {
    //                             console.log(res);
    //                             return true;
    //                         },
    //                         err => console.log(err)
    //                     );
    // return false;

  }
}
