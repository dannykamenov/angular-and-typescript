import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent {
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPosts().subscribe((value) => {
      console.log(value)
    });
  }

}
