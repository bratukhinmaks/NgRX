import {AuthStateInterface, FeedInitialState} from "../../shared/types";
import {Action, createReducer, on} from "@ngrx/store";
import {feedAction, feedFailureAction, feedSuccessAction} from "./feed.actions";

const initialState: FeedInitialState = {
  feedList: null,
  error: null,
  isLoading: null,
}

const feedReducer = createReducer(initialState,
  on(feedAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(feedSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    feedList: action.feeds
  })),
  on(feedFailureAction, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.errors
  })),
)

export function reducer(state: FeedInitialState, action: Action) {
  return feedReducer(state, action)
}
