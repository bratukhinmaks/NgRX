import { Component, OnInit } from '@angular/core';
import {FeedFacade} from "../store/feed.facade";

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
  public apiUrl = '/articles'

  public feedLoading$ = this.feedFacade.isLoading$;
  constructor(private feedFacade: FeedFacade) { }

  ngOnInit() {
  }

}
