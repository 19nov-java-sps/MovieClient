import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password:string) {
    if (username === 'abc' && password === '123') {
      return true;
    }
    else return false;
  }
}
