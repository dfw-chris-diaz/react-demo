import { TEST } from '../shared/reduxConstants';

export default function reducer(state={}, action) {
    switch (action.type) {
      case TEST: {
        let newState = action;

        return {
          ...newState
        };
      }
      default: {
        return state;
      }
      //need a fail ha
    }
}
