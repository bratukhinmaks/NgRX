import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {feedSelector, isLoadingSelector} from "./feed.selectors";
import {feedAction} from "./feed.actions";


@Injectable({providedIn: 'root'})

export class FeedFacade {
  public allFeeds$ = this.store.pipe(select(feedSelector));
  public isLoading$ = this.store.pipe(select(isLoadingSelector));

  constructor(private store: Store<any>) {
  }
  public getFeeds(url: string) {
    this.store.dispatch(feedAction({url}))
  }
}
