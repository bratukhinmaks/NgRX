import {Injectable} from "@angular/core";

import {catchError, map, switchMap, tap} from "rxjs/operators";
import {EMPTY, of} from "rxjs";

import {Actions, createEffect, ofType} from "@ngrx/effects";

import {AuthService} from "../../services/auth.service";
import {PercistentService} from "../../../shared/services/percistent.service";

import {CurrentUserInterface} from "../../../shared/types";
import {fetchuserAction, fetchuserFailureAction, fetchuserSuccessAction} from "../actions/fetchuser.actions";

@Injectable()
export class FetchUserEffect {
  constructor(private actions$: Actions, private authServ: AuthService, private percistent: PercistentService) {
  }
  fetch$ = createEffect(() => this.actions$.pipe(
    ofType(fetchuserAction),
    switchMap(() => {
      const token = this.percistent.get('token');
      if (token) {
        return this.authServ.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return fetchuserSuccessAction({currentUser})
          }),
          catchError(()=> {
            return of(fetchuserFailureAction())
          })
        )
      } else {
        return of(fetchuserFailureAction())
      }

    })
  ))

}
