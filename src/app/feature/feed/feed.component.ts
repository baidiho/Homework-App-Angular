// import { IArticles } from './../../core/services/types/types';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { IArticles } from 'src/app/core/services/types/types';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(public dataSer: DataService) {}

  articles$: Observable<IArticles>;
  tags$: Observable<Array<string>>;

  ngOnInit(): void {
    forkJoin([
      (this.articles$ = this.dataSer.getArticles()),
      (this.tags$ = this.dataSer.getTags()),
    ]).pipe(tap(() => console.log(this.articles$)));
  }

  public tagWasClicked: boolean = false;
  public resultOfPopTagClick: string | null;

  // Handler for tag's click
  popularTagClick(data: string): void {
    this.tagWasClicked = true;
    this.resultOfPopTagClick = `#${data}`;
  }
}
