import { combineReducers } from 'redux';
import { createReducer } from '../helpers/reduxHelper';
import * as Actions from '../actions/types';


const loadingReducer = createReducer({
  initialState: false,
  actionType: Actions.APP_SET_LOADING,
});

const appOpenReducer = createReducer({
  initialState: true,
  actionType: Actions.IS_APP_OPEN,
});
export default combineReducers({
  loading: loadingReducer,
  isAppOpen: appOpenReducer,
});
