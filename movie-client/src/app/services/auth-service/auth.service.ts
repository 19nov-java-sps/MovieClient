import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8080/PBJCinema/login';
  result: User = null;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    
    if (email === 'abc@gmail.com' && password === '123') {
      return true;
    }
    else return false;
  }


}
