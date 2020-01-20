import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class IntroductionToJSX extends Component {
  //Embedding Expressions in JSX
  render() {
    //In the example below, we declare a variable called name and 
    //then use it inside JSX by wrapping it in curly braces:
    //const name = 'Josh Perez';
    //const element = <h1>Hello, {name}</h1>;

    //In the example below, 
    //we embed the result of calling a JavaScript function, formatName(user), into an <h1> element.
    const user={
      firstName:'Kedar',
      lastName:'Jadhav'
    };

    function formatName(user)
    {
      return user.firstName+ ''+ user.lastName;
    };

    const element=(
      <h1>
        Hello, {formatName(user)}
      </h1>
    );
    
    //renter element on screen
    return (
    element  
    );
  }
}

export default IntroductionToJSX;
