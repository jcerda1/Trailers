import React, { Component } from 'react';


class App extends Component {
	constructor() {
	  super(); 
	  this.state = {
	  	name: 'Jeramiah'
	  }
	}

  render() {
  	return (
      <div>{Hello `${this.state.name}`}</div>
  	)
  }
}