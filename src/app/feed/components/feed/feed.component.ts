import {Component, Input, OnInit} from '@angular/core';
import {FeedFacade} from "../../store/feed.facade";
import {Feed} from "../../../shared/types";
import {Observable} from "rxjs";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string;

  public feedLoading$ = this.feedFacade.isLoading$;
  
  public feeds$: Observable<Feed>
  constructor(private feedFacade: FeedFacade) { }

  public ngOnInit(): void {
    this.feedFacade.getFeeds(this.apiUrl)
    this.feeds$ = this.feedFacade.allFeeds$;
  }

}
