import {Component, OnInit} from '@angular/core';
import {ArticleListService} from "../../core/services/articles/article-list.service";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  tagLists: string[] = [];

  constructor(private articleListService: ArticleListService) {
  }

  ngOnInit(): void {
    this.articleListService.getTagLists().then(data => this.tagLists = data);
  }

}
