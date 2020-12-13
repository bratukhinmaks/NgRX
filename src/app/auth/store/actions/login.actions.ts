import { createAction, props } from "@ngrx/store";

import {ActionTypes} from "../actionTypes";
import {BackEndErrors, CurrentUserInterface, RequestUserInterface} from "../../../shared/types";

export const loginAction = createAction(ActionTypes.LOGIN, props<{request: RequestUserInterface}>())

export const loginSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS, props<{currentUser: CurrentUserInterface}>())

export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{errors: BackEndErrors}>())
