import { IArticle } from './../../core/services/types/types';
import { Component, Input, OnInit } from '@angular/core';
import { StateOfTag } from '../../shared/tag/tag.component';
@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.articleData);
  }
  @Input() articleData: IArticle;
  /* This is array for ngFor when render tags in populartags */

  tagStyle: StateOfTag = StateOfTag.tagInFeed;
  // Create date for fead header
}
