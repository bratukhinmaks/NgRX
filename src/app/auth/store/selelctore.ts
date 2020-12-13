import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface, AuthStateInterface} from "../../shared/types";

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
  >('auth')

export const isSubmittingSelector = createSelector(authFeatureSelector, authState => authState.isSubmitting)
export const isLoggedInSelector = createSelector(authFeatureSelector, authState => authState.isLoggedIn)
export const currentUserSelector = createSelector(authFeatureSelector, authState => authState.currentUser)
export const validationSelector = createSelector(authFeatureSelector, authState => authState.validationErrors)
