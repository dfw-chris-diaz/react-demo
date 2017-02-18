import React from 'react';
import ADDOPTINFO from './addOptInfo';
import OPTINFO from './optInfo';

export default class Tab3LandingPage extends React.Component {
  constructor(props){
    super();
    
    this.state = {
      optInfo: []
    }
  }
  
  addRecord = (record) => {
      let optInfo = this.state.optInfo;
      optInfo.push(record);
      this.setState({optInfo});
  }
    
  render(){
    return(
      <div>
        <table style={{width: '832px'}}>
            <tbody>
                <tr>
                    <td style={{width: '790px'}} className="lightGreyBackground" colSpan="5"><strong>Some Header Information</strong></td>
                </tr>
                <tr>
                    <td style={{width: '152px'}}>&nbsp;</td>
                    <td style={{width: '162px'}}>Col A</td>
                    <td style={{width: '175px'}}>Col B</td>
                    <td style={{width: '167.367px'}}>Col C</td>
                    <td style={{width: '133.633px'}}>Col D</td>
                </tr>
                <tr>
                    <td style={{width: '152px'}}>Row A</td>
                    <td >&nbsp;</td>
                    <td >&nbsp;</td>
                    <td >&nbsp;</td>
                    <td style={{width: '133.633px'}} >&nbsp;</td>
                </tr>
                <tr>
                    <td style={{width: '152px'}}>Row B</td>
                    <td style={{width: '162px'}} >&nbsp;</td>
                    <td style={{width: '175px'}} >&nbsp;</td>
                    <td style={{width: '167.367px'}} >&nbsp;</td>
                    <td style={{width: '133.633px'}} >&nbsp;</td>
                </tr>
                <tr>
                    <td style={{width: '152px'}}>Row C</td>
                    <td style={{width: '162px'}} >&nbsp;</td>
                    <td style={{width: '175px'}} >&nbsp;</td>
                    <td style={{width: '167.367px'}} >&nbsp;</td>
                    <td style={{width: '133.633px'}} >&nbsp;</td>
                </tr>
            </tbody>
        </table>
      <ADDOPTINFO addRecord={this.addRecord} />
      {
        this.state.optInfo.map((optInfoRecord, i) => {
          return (<OPTINFO data={optInfoRecord} key={i} number={++i} />);
        })
      }
      </div>
    );
  }

}