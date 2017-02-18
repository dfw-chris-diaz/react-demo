import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Default from './Default';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import '../../css/startHereMainTable.css';

export default class Tab2LandingPage extends React.Component {
  constructor(props){
    super();
    
    this.state = {
      key: 1,
      display: <Default />
    };
  }
  
  handleSelect = (key) => {
    let display = "";
    switch (key.toString()) {
      case "1": 
        display = <Default />;
        break;
      case "2":
        display = <Step1 />;
        break;
      case "3":
        display = <Step2 />;
        break;
      case "4":
        display = <Step3 />;
        break;
      default:
        display = <Default />;
        break;
    }

    this.setState({
      key,
      display
    });
  }
    
  render () {
    return (
      <div>
        <span className="row">  
          <table id="shMaintable">
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <Tabs stacked activeKey={this.state.key} onSelect={this.handleSelect} id="startHereNavigator">
                  <Tab eventKey={1} title="Default" />
                  <Tab eventKey={2} title="Step 1" />
                  <Tab eventKey={3} title="Step 2" />
                  <Tab eventKey={4} title="Step 3" />
                </Tabs>
              </td>
              <td>
                &nbsp;&nbsp;
              </td>
              <td>
                {this.state.display}
              </td>
            </tr>
          </tbody>
          </table>
        </span>
      </div>
    );
  }
}
