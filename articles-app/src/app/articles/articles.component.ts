import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any = new ArticleData().getData();

  constructor() {
    this.articles = new ArticleData().getData();
    console.log(this.articles);
  }
  
  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }
}
