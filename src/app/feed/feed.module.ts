import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './global-feed/global-feed.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FeedComponent} from "./components/feed/feed.component";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./store/feed.reducer";
import {FeedFacade} from "./store/feed.facade";
import {EffectsModule} from "@ngrx/effects";
import {FeedEffects} from "./store/feed.effects";
import { FeedSingleComponent } from './components/feed-single/feed-single.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
]

@NgModule({
  declarations: [GlobalFeedComponent, FeedComponent, FeedSingleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature('feed', reducer),
    EffectsModule.forFeature([FeedEffects])
  ],
  providers: [
    FeedFacade
  ],
  exports: [GlobalFeedComponent]
})
export class FeedModule { }
