import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

import {catchError, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

import {Actions, createEffect, ofType} from "@ngrx/effects";

import {AuthService} from "../../services/auth.service";
import {PercistentService} from "../../../shared/services/percistent.service";

import {CurrentUserInterface} from "../../../shared/types";
import {loginAction, loginFailureAction, loginSuccessAction} from "../actions/login.actions";

@Injectable()
export class LoginEffect {
  constructor(private actions$: Actions, private authServ: AuthService, private percistent: PercistentService, private router: Router) {
  }
  register$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({request}) => {
      return this.authServ.login(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          this.percistent.set('token', currentUser.token)
          return loginSuccessAction({currentUser})
        }),
        catchError((err)=> {
          return of(loginFailureAction({errors: err.error.errors}))
        })
      )
    })
  ))

  redirectAfterSuccess$ = createEffect(()=> this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(()=> {
      this.router.navigate(['/'])
    })
    ),
    {dispatch: false}
  )
}
