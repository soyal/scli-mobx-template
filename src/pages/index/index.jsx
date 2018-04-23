import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {
  render() {
    return (
      <div>
        <h2>index</h2>
        <Link to="/page1">to Page1</Link>
        <Link to="/page2">to Page2</Link>
      </div>
    )
  }
}

export default Index
