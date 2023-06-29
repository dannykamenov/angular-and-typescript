import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit{

  isAuthenticating = true;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (user) => {
        this.authService.user = user;
        this.isAuthenticating = false;
      },
      error: (err) => {
        this.authService.user = null;
        this.isAuthenticating = false;
      }
    })
  }
}
