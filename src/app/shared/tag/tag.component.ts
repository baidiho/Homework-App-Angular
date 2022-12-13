import { Component, OnInit, Input } from '@angular/core';
export enum StateOfTag {
  tagInPopular = 'tag-default',
  tagInFeed = 'tag-default tag-outline',
}
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  ngOnInit(): void {}
  @Input() title: string;
  @Input() state: string;
}
