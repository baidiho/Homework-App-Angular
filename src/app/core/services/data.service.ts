import { IArticles, IListOfTags } from './types/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public http: HttpClient) {}
  public articles: any;
  private tagsURL: string = 'https://api.realworld.io/api/tags';
  private articleURL: string = 'https://api.realworld.io/api/articles';
  getTags() {
    return this.http
      .get<IListOfTags>(this.tagsURL)
      .pipe(map((val) => val.tags));
  }

  getArticles(): Observable<IArticles> {
    return this.http
      .get<any>(this.articleURL, {
        params: {
          limit: 10,
          offset: 0,
        },
      })
      .pipe(map((val) => val.articles));
  }
}
