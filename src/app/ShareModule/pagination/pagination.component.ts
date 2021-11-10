import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleService } from 'src/app/CoreModule/services/article/article.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage!: number;
  @Output() onPageChanged: EventEmitter<number> = new EventEmitter()
  pagesCount: number = this.articleListService.pagesCount;
  pageRange = 4;
  pageList:any = [];
  constructor(
    private articleListService: ArticleService
  ) { }

  ngOnInit() {
    for (let i=this.currentPage-this.pageRange; i<=this.currentPage+this.pageRange && i<=this.pagesCount; i++) {
      if (i>=1) this.pageList.push(i);
    }
  }

  moveToPage(i: number) {
    this.onPageChanged.emit(i);
  }
  nextPage() {
    this.moveToPage(this.currentPage+1);
  }

  previousPage() {
    this.moveToPage(this.currentPage-1)
  }

}
