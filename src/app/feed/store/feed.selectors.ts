import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface,  FeedInitialState} from "../../shared/types";

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedInitialState
  >('feed')

export const feedSelector = createSelector(feedFeatureSelector, feedState => feedState.feedList)
export const isLoadingSelector = createSelector(feedFeatureSelector, feedState => feedState.isLoading)
