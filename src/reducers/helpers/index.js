import { fromJS } from 'immutable';

/**
 * Factory function to create a reusable status reducer
 *
 * @name createStatus
 * @function
 * @param {Object[Array]} types an object of containing arrays of request/success/error action types
 * @returns {Function} a generic redux reducer that accepts a state/action
 *
 * @usage
  export const status = createStatus({
    request: [REQUEST_ACTION],
    success: [SUCCESS_ACTION],
    error: [ERROR_ACTION]
  })
 */
export function createStatus(types) {
  const { request, success, error } = types;
  const initial = fromJS({
    request: false,
    success: false,
    error: false
  });

  return (state = initial, action) => {
    if (request.indexOf(action.type) > -1) {
      return state
        .set('request', true)
        .set('success', false)
        .set('error', false);
    }

    if (success.indexOf(action.type) > -1) {
      return state
        .set('request', false)
        .set('success', true)
        .set('error', false);
    }

    if (error.indexOf(action.type) > -1) {
      return state
        .set('request', false)
        .set('success', false)
        .set('error', true);
    }

    return state;
  };
}
