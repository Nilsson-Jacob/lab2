import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';
import ComposeSaladModal from './ComposeSaladModal';
import { render } from '@testing-library/react';
import OrderView from './OrderView';


class App extends Component {
  constructor(props){
      super(props);
      this.state={
        salads: []
      };

  }

  addSalad = (salad) => {
    let temp = this.state.salads;
    temp.push(salad);

    this.setState({
      salads: temp
    });

}

render(){

  
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>My Own Salad Bar</h1>
        <p>Here you can order custom made salads!</p> 
       </div>
      <div>
        <ComposeSaladModal inventory={inventory} addSalad={this.addSalad}/>
        <OrderView order={this.state.salads}/>
    </div>
  </div>
  );
}
}



export default App;
