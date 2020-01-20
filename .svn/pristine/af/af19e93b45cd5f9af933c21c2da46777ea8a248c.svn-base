import React,{Component} from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
     // this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
      this.state={};
      this.state.hello='hellosss';

    }
    
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      alert('ddd');
      //this.textInput.current.focus();
    }

     sagar(b){
        alert(b);
    };
  
    render() {
        let cat='sumit';
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
          <input
            type="text"
             />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }

  export default CustomTextInput