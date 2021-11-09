import {Component, OnInit} from '@angular/core';
import {ArticleListService} from "../../core/services/articles/article-list.service";
import {Article, Articles} from "../../core/model/article.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleListService: ArticleListService) {
  }

  ngOnInit(): void {
    this.articleListService.getArticle().subscribe(data => {
      // @ts-ignore
      this.articles = data['articles'];
      console.log(this.articles);
    });
  }

}
