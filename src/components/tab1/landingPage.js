import React from 'react';
import {connect} from "react-redux";
import { show } from "../../actions/test";

class Tab1LandingPage extends React.Component {
  constructor(props){
    super();
    
    this.state = {
      text: ""
    };
  }
  
  changeText = (e) => {
    this.setState({text: e.target.value});
  }
  
  submitText = () => {
    this.props.dispatch(show(this.state.text));
  }
  
  render(){
    return(
      <div>
        &nbsp;&nbsp;<input type="text" onChange={this.changeText} value={this.state.text} />
        &nbsp;&nbsp;<input type="button" value="Submit" onClick={this.submitText} />
        <br /><br />
        &nbsp;&nbsp;{this.props.text}
      </div>
    );
  }
}

Tab1LandingPage.defaultProps = {
  text: ""
};

function mapStateToProps(state) {
  const text = state.test.text;
  
  return {
    text
  };
}

export default connect(mapStateToProps)(Tab1LandingPage);