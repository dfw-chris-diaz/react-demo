import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Tab1LandingPage from './tab1/landingPage';
import Tab2LandingPage from './tab2/landingPage';
import Tab3LandingPage from './tab3/landingPage';

export default class MainPage extends React.Component {
  constructor (props) {
    super();

    this.state = {
      key: props.defaultTab,
      display: null
    };
  }
  
  componentDidMount(){
    this.handleSelect(this.props.defaultTab);
  }
  
  handleSelect = (key) => {
    let display = "";
    switch (key.toString()) {
      case "1":
        display = <Tab1LandingPage />;
        break;
      case "2":
        display = <Tab2LandingPage />;
        break;
      case "3":
        display = <Tab3LandingPage />;
        break;
      default:
        display = <Tab1LandingPage />;
        break;
    }

    this.setState({
      key,
      display
    });
  }

  render() {
    return (
      <div>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="mainNavigator">
          <Tab eventKey={1} title="Tab 1" />
          <Tab eventKey={2} title="Tab 2" />
          <Tab eventKey={3} title="Tab 3" />
        </Tabs>
        
        {this.state.display}
      </div>
    );
  }
}