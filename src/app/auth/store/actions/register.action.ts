import {Action, createAction, props} from "@ngrx/store";

import {ActionTypes} from "../actionTypes";
import {BackEndErrors, CurrentUserInterface, RequestUserInterface} from "../../../shared/types";

export const registerAction = createAction(ActionTypes.REGISTER, props<{request: RequestUserInterface}>())

export const registerSuccessAction = createAction(ActionTypes.REGISTER_SUCCESS, props<{currentUser: CurrentUserInterface}>())

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE, props<{errors: BackEndErrors}>())
