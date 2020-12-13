import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {currentUserSelector, isSubmittingSelector, validationSelector} from "../../store/selelctore";
import {AuthService} from "../../services/auth.service";
import {BackEndErrors, CurrentUserInterface, RequestUserInterface} from "../../../shared/types";
import {loginAction} from "../../store/actions/login.actions";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isSubmitting$: Observable<boolean>
  public user$: Observable<CurrentUserInterface>
  public validationErrors$: Observable<BackEndErrors| null>

  public form: FormGroup;
  public password = true;

  constructor(private fb: FormBuilder, private store: Store<any>, private authServ: AuthService, private router: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeForm(): void {
    this.router.queryParams.subscribe((params) => {
      this.form = this.fb.group({
        email: [params.mail, [Validators.email,Validators.required]],
        password: ['', [Validators.minLength(8)]],
      })
    })

  }

  public initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.user$ = this.store.pipe(select(currentUserSelector))
    this.validationErrors$ = this.store.pipe(select(validationSelector))
  }


  public onSubmit(): void {
    if (this.form.valid) {
      const req: RequestUserInterface = {
        user: this.form.value
      }
      this.store.dispatch(loginAction({request: req}))
      this.form.reset()
    } else {
      return
    }

  }
}

