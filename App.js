import React, {Component} from 'react';
import AppRouter from './src/app-routing'

export default class App extends Component {

  constructor(){
    super()
  }

  render() {
    return (
      <AppRouter/>
    );
  }

}

