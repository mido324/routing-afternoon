import React, { Component } from 'react';
import ClassList from './ClassList'
export default class ClassList extends Component {
  constructor() {
    super()
    
  }

  render() {
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
          <Route path="/classlist/:class" component = {ClassList}
      </div>
    )
  }
    
}