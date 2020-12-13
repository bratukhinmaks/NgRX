import {AuthStateInterface} from "../../shared/types";
import {Action, createReducer, on} from "@ngrx/store";
import {registerAction, registerFailureAction, registerSuccessAction} from "./actions/register.action";
import {loginAction, loginFailureAction, loginSuccessAction} from "./actions/login.actions";
import {fetchuserAction, fetchuserFailureAction, fetchuserSuccessAction} from "./actions/fetchuser.actions";


const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
}

const authReducer = createReducer(initialState,
  on(registerAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),

  on(registerSuccessAction, (state,action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: false,
    currentUser: action.currentUser
  })),
  on(registerFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(loginAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),

  on(loginSuccessAction, (state,action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(loginFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(fetchuserAction, (state): AuthStateInterface => ({
    ...state,
    currentUser: null
  })),

  on(fetchuserSuccessAction, (state,action): AuthStateInterface => ({
    ...state,
    currentUser: action.currentUser,
    isLoggedIn: true
  })),
  on(fetchuserFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    currentUser: null,
    isLoggedIn: false,
  })),

  )

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
