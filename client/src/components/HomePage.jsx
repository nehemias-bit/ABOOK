import React, { Component } from 'react'
import CreateBook from './CreateBook';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }




  render() {
    return (
      <div>
        <h1>In the home page</h1>
        <Link to="add-book"><button>Add Book</button></Link>
      </div>
    )
  }
}
