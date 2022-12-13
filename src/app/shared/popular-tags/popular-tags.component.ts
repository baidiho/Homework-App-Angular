import { IListOfTags } from './../../core/services/types/types';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StateOfTag } from '../tag/tag.component';
@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  ngOnInit(): void {}
  @Input() tagList: IListOfTags;
  @Output() tagTitleEmitter = new EventEmitter<string>();
  tagClicked(data: string): void {
    this.tagTitleEmitter.emit(data);
  }
  tagStyle: StateOfTag = StateOfTag.tagInPopular;
}
