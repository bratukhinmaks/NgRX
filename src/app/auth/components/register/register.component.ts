import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {registerAction} from "../../store/actions/register.action";
import {Observable} from "rxjs";
import {currentUserSelector, isSubmittingSelector, validationSelector} from "../../store/selelctore";
import {AuthService} from "../../services/auth.service";
import {BackEndErrors, CurrentUserInterface, RequestUserInterface} from "../../../shared/types";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isSubmitting$: Observable<boolean>
  public user$: Observable<CurrentUserInterface>
  public validationErrors$: Observable<BackEndErrors| null>

  public form: FormGroup;
  public password = true;
  constructor(private fb: FormBuilder, private store: Store<any>, private authServ: AuthService) {
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  public initializeForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [Validators.minLength(8)]],
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
      this.store.dispatch(registerAction({request: req}))
      this.form.reset()
    } else {
      return
    }

  }
}
