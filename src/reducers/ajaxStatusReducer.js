import * as Types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallInProgress, actions) {
  if (actions.type == Types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actions.type == Types.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(actions.type)) {
    return state - 1;
  }

  return state;
}
