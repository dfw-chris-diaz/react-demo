import { TEST } from '../shared/reduxConstants';
import axios from 'axios';

export function show(text) {
  return function(dispatch) {
    axios.get('/cgi-bin/test.py?data=' + text)
    .then(function (response) {
      const action = {
        type: TEST,
        text: response.data.reply
      }
      dispatch(action);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}