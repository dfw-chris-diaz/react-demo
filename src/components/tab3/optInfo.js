import React from 'react';

export default class OPTINFO extends React.Component {
  constructor(props){
    super();
  }
  
  render() {
    return(
      <div>
        <br />
          <table style={{width: '832px'}}>
              <tbody>
                  <tr style={{height: '53px'}}>
                      <td style={{width: '528px'}} className="lightGreyBackground">
                          <h3 id="mcetoc_1b94gb9571">Some Option Info #{this.props.number}</h3>
                      </td>
                      <td style={{width: '346px'}} className="lightGreyBackground" colSpan="2">&nbsp;</td>
                  </tr>
                  <tr style={{height: '18px'}}>
                      <td style={{width: '528px', height: '18px'}}>Option 1</td>
                      <td style={{width: '346px'}} colSpan="2">&nbsp;</td>
                  </tr>
                  <tr style={{height: '18px'}}>
                      <td style={{width: '528px', height: '18px'}}>Option 2</td>
                      <td style={{width: '346px'}} colSpan="2">&nbsp;</td>
                  </tr>
                  <tr style={{height: '18px'}}>
                      <td style={{width: '528px', height: '18px'}}>Option 3</td>
                      <td style={{width: '346px'}} colSpan="2">&nbsp;</td>
                  </tr>
              </tbody>
          </table>
        <br />
      </div>
    );
  }
}