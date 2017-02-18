import { TEST } from '../shared/reduxConstants';
import axios from 'axios';

export function show(text) {
  return function(dispatch) {
    axios.get('http://localhost/cgi-bin/test.py?data=' + text)
    .then(function (response) {
      const action = {
        type: TEST,
        text: response.data.reply
      }
      dispatch(action);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}