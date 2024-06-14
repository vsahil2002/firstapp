import * as Actions from './types';
import { ActionCreatorWithPayload, createAction, Dispatch } from '@reduxjs/toolkit';

/**
 * @desc Set Auth Loader
 */
export const setAuthLoader: ActionCreatorWithPayload<boolean, string> = createAction(Actions.SET_AUTH_LOADER);
/**
 * @desc Update Login User
 */
export const updateLoginUser: ActionCreatorWithPayload<any, string> = createAction(Actions.UPDATE_LOGIN_USER);
/**
 * @desc clear Login User
 */
export const clearLoginUser = createAction(Actions.CLEAR_LOGIN_USER);

/**
 * @desc Update Login User
 */
export const updateSigupUSer: ActionCreatorWithPayload<any, string> = createAction(Actions.UPDATE_SIGNUP_USER);
/**
 * @desc clear Login User
 */
export const clearSignupUser = createAction(Actions.CLEAR_SIGNUP_USER);

/**
 * @desc set join user data
 */
export const setJoinUserData: ActionCreatorWithPayload<any, any> = createAction(Actions.SET_JOIN_USER_DATA);

/**
 * @desc update join user data
 */
export const updateJoinUserData: ActionCreatorWithPayload<any, any> = createAction(Actions.UPDATE_JOIN_USER_DATA);

/**
 * @desc clear join user data
 */
export const clearJoinUserInfoData = createAction(Actions.CLEAR_JOIN_USER_DATA);

/**
 * @desc Set Password Detail
 */
export const setPasswordDetail: ActionCreatorWithPayload<any, string> = createAction(Actions.SET_PASSWORD_DETAIL);

/**
 * @desc Update Password Detail
 */
export const updatePasswordDetail: ActionCreatorWithPayload<any, string> = createAction(Actions.UPDATE_PASSWORD_DETAIL);

/**
 * @desc Clear Password Detail
 */
export const clearPasswordDetail: ActionCreatorWithPayload<any, string> = createAction(Actions.CLEAR_PASSWORD_DETAIL);

/**
 * @desc Clear Auth Data
 */
export const clearAuthData = () => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(false));
  dispatch(clearLoginUser());
  dispatch(clearSignupUser());
};
