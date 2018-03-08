/**
 * 最顶层组件
 */
import React, { Component } from 'react'
import Routers from './routers'
import DevTools from 'mobx-react-devtools'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {process.env.NODE_ENV === 'development' ? <DevTools /> : null}
          <Routers history={this.props.history} />
        </div>
      </div>
    )
  }
}
