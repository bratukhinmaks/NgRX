import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/register.action";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types";
import {of} from "rxjs";
import {PercistentService} from "../../../shared/services/percistent.service";
import {Router} from "@angular/router";


@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions, private authServ: AuthService, private percistent: PercistentService, private router: Router) {
  }
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({request}) => {
      return this.authServ.register(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          return registerSuccessAction({currentUser})
        }),
        catchError((err)=> {
          return of(registerFailureAction({errors: err.error.errors}))
        })
      )
    })
  ))

  redirectAfterSuccess$ = createEffect(()=> this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(({currentUser})=> {
      this.router.navigate(['/login'],{queryParams:{mail: currentUser.email}})

    })
    ),
    {dispatch: false}
  )
}
