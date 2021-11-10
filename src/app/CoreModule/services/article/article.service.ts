import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Article } from '../../interfaces/article'
import { AuthenticationService } from '../auth-service/authentication.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
   baseURL = 'https://conduit.productionready.io';
  

  pagelimit: number = 10;
  pagescount!: number;
  filter!: string;


  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) { }

  get pageLimit(): number {
    return this.pagelimit;
  }

  set pageLimit(limit: number) {
    this.pagelimit = limit;
  }

  get pagesCount(): number {
    return this.pagescount;
  }

  setFilter(filter: string) {
    this.filter = filter;
  }

  getArticlesWithFilter(page: number, filterValue?: string): Observable<Article[]> {
    let offset = (page - 1) * this.pageLimit;
    let apiURL = this.baseURL + '/api/articles?limit=' + this.pageLimit;
     if (this.filter!='' && filterValue && filterValue!='') {
      apiURL+= `&${this.filter}=${filterValue}`;
    }
    if (offset > 0) apiURL += ('&offset=' + offset);

    return this.http.get(apiURL).pipe(
      tap((data:any) => this.pagescount = Math.ceil(data['articlesCount']/this.pagelimit)),
      map(data => data['articles'] as Article[])
    );
  }

  
}