import React, { Component } from 'react';

const FancyButton = React.forwardRef((props, ref1) => (
    <button ref={ref1} className="FancyButton">
      {props.children}
    </button>
  ));
  
  // You can now get a ref directly to the DOM button:
  const ref = React.createRef();
  <FancyButton ref1={ref}>Click me!</FancyButton>;

  export default FancyButton;