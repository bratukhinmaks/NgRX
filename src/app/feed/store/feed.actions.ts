import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../../auth/store/actionTypes";
import {BackEndErrors, CurrentUserInterface, Feed } from "../../shared/types";

export const feedAction = createAction(ActionTypes.GET_FEED, props<{url: string}>())

export const feedSuccessAction = createAction(ActionTypes.GET_FEED_SUCCESS, props<{feeds: Feed}>())

export const feedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE, props<{errors: string}>())
