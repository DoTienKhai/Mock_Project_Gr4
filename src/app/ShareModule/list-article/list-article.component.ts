import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/CoreModule/interfaces/article';
import { ArticleService } from 'src/app/CoreModule/services/article/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  loadingArticles: boolean = true;
  currentPage!: number;
  articles: Article[] = [];
  filterValue = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.currentPage = 1;
    this.route.params.subscribe((param: any) => {
      this.filterValue = param.value;
      
    this.onPageChanged(this.currentPage);
    })
  }

  onPageChanged(page: number) {
    this.loadingArticles = true;
    this.articles = [];
    this.articleService.getArticlesWithFilter(page, this.filterValue).subscribe(value => {
      this.currentPage = page;
      this.loadingArticles = false;
      this.articles = value;
    });

  }

}
