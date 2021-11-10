import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/CoreModule/interfaces/article';

@Component({
  selector: 'app-preview-article',
  templateUrl: './preview-article.component.html',
  styleUrls: ['./preview-article.component.scss']
})
export class PreviewArticleComponent implements OnInit {

  @Input() article!: Article;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
