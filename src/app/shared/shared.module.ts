import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [PopularTagsComponent, TagComponent],
  imports: [CommonModule],
  exports: [TagComponent, PopularTagsComponent],
})
export class SharedModule {}
