import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get<ITheme[]>('http://localhost:3000/api/themes')
  }

  loadPosts() {
    return this.httpClient.get<IPost[]>('http://localhost:3000/api/posts?limit=5')
  }

  loadTheme(id: string) {
    return this.httpClient.get<ITheme>(`http://localhost:3000/api/themes/${id}`)
  }
}
