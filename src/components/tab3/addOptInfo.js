import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class ADDOPTINFO extends React.Component {
  render() {
    return(
      <div>
        <br />
        <a href="#" onClick={() => this.props.addRecord({})}><Glyphicon glyph="plus-sign" /></a>
      </div>
    );
  }
}