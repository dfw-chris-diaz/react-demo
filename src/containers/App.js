import React from 'react';
import '../css/App.css';
import '../css/headerTable1.css';
import '../css/colors.css';
import '../css/font.css';
import MainPage from '../components/mainPage';

export default class App extends React.Component {
  constructor (props) {
    super ();

    this.defaultTab = 2;
    
  }
  
  render() {
    return (
      <div>
        <MainPage defaultTab={this.defaultTab}/>
      </div>
    );
  }
}
