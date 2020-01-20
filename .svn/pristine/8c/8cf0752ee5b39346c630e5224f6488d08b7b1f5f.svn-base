import React, { Component } from 'react';
import CustomTextInput from './CustomTextInput';

class AutoFocusTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.sagar = React.createRef();
    }
  
    componentDidMount() {
      //var hi='hi';
      //this.textInput.current.state.hello.push()
      console.log(this.sagar.current.state.hello);

      this.sagar.current.focusTextInput();
      
    }
  
    render() {
      return (
        <CustomTextInput ref={this.sagar} />

      );
    }
  }

  export default AutoFocusTextInput;