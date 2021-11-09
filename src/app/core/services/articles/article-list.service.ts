import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article, Articles} from "../../model/article.model";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {
  private URL = 'https://conduit.productionready.io';

  private pageLimit: number = 10;
  private pageCount!: number;
  private filter!: string;

  constructor(private http: HttpClient) {
  }

  // #region methods

  get pageLimited(): number {
    return this.pageLimited;
  }

  set pageLimited(limit: number) {
    this.pageLimited = limit;
  }

  get pageCounts(): number{
    return this.pageCount;
  }

  getTagLists(): Promise<string[]>{
    return new Promise(resolve => {
      this.http.get(this.URL + '/api/tags').subscribe(
        data => {
          // @ts-ignore
          resolve(data['tags'] as string[])
        }
      )
    })
  }


  getArticle(): Observable<Articles[]> {
    return this.http.get<Articles[]>(this.URL + '/api/articles');
  }

  // #end region methods
}
