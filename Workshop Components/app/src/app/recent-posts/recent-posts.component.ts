import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent {

  posts: IPost[] | null = null;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPosts().subscribe((value) => {
      this.posts = value;
    });
  }

}
