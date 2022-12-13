import { ReactiveFormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
import { SettingsComponent } from './settings/settings.component';
import { NewarticleComponent } from './newarticle/newarticle.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    FeedComponent,
    FeedItemComponent,
    HighlightDirective,
    TruncatePipe,
    SettingsComponent,
    NewarticleComponent,
    ProfileComponent,
  ],
  exports: [FeedComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class FeatureModule {}
