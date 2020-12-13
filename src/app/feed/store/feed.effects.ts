import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {feedAction, feedFailureAction, feedSuccessAction} from "./feed.actions";
import {FeedService} from "../services/feed.service";

@Injectable()
export class FeedEffects {

  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$= createEffect(() => this.actions$.pipe(
    ofType(feedAction),
    switchMap(({url}) => {
      return this.feedService.getFeed(url).pipe(
        map((feeds) => {
          return feedSuccessAction({feeds})
        }),
        catchError((err)=> {
          return of(feedFailureAction({errors: err.error.errors}))
        })
      )
    })
  ))
}
