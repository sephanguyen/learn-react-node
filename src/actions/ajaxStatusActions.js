import * as Types from './actionTypes';

export function beginAjaxCall() {
  return {type: Types.BEGIN_AJAX_CALL};
}

export function ajaxCallError(err) {
  return {type: Types.AJAX_CALL_ERROR, err};
}
