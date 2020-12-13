import { createAction, props } from "@ngrx/store";

import {ActionTypes} from "../actionTypes";
import {BackEndErrors, CurrentUserInterface, RequestUserInterface} from "../../../shared/types";

export const fetchuserAction = createAction(ActionTypes.USERFETCH)

export const fetchuserSuccessAction = createAction(ActionTypes.USERFETCH_SUCCESS, props<{currentUser: CurrentUserInterface}>())

export const fetchuserFailureAction = createAction(ActionTypes.USERFETCH_FAILURE)
