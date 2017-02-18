import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const output = (
  <div>
    <p><span className="purpleText"><strong>Legend</strong></span></p>
    <table style={{width: '460px'}}>
        <tbody>
            <tr>
                <td style={{width: '460px'}} className="yellowBackground"><strong>Required</strong></td>
            </tr>
            <tr>
                <td style={{width: '460px'}} className="lightBlueBackground"><strong>Optional</strong></td>
            </tr>
        </tbody>
    </table>
  </div>
);


export default class Legend extends React.Component {
  constructor(){
    super();
    
    this.state = {
      legend: ""
    };
  }
  
  toggleLegend = () => {
    let legend = this.state.legend ?  "" : output;
    
    this.setState({ legend });
  }
  
  render() {
    return(
      <div>
        <br />
        <a href="#" onClick={this.toggleLegend}><Glyphicon glyph="question-sign" /></a>
        {this.state.legend}
      </div>
    );
  }
}