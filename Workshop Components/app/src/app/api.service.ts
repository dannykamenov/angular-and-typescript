import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get('http://localhost:3000/api/themes')
  }

  loadPosts() {
    return this.httpClient.get('http://localhost:3000/api/posts?limit=5')
  }
}
