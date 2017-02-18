import { TEST } from '../shared/reduxConstants';

export function show(text) {
  return function(dispatch) {
    const action = {
      type: TEST,
      text
    }
    dispatch(action);
  }
}