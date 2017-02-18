import { TEST } from '../shared/reduxConstants';

export default function reducer(state={}, action) {
    switch (action.type) {
      case TEST: {
        let newState = action;

        let newText = "This is what we got back from Redux: " + newState.text;
        
        let charCount = newState.text.length;
        
        newText = newText + " (" + charCount + " characters)";
        
        delete newState["text"];
        
        newState["text"] = newText;
        
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
