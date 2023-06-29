import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string, rePassword: string, tel?: string) {
    return this.http.post<IUser>('http://localhost:3000/api/register', { username, email, password, rePassword, tel });
  }

  login(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/api/login', { email, password });
  }
}
