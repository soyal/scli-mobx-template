import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('page2Store')
@observer
class Page2 extends Component {
  static propTypes = {
    page2Store: PropTypes.object
  }

  onNameChange = e => {
    const value = e.target.value

    this.props.page2Store.updateName(value)
  }

  addName = () => {
    const { page2Store } = this.props
    page2Store.addName(page2Store.name)
  }

  render() {
    const { page2Store } = this.props

    return (
      <div>
        <h2>page2</h2>
        <input
          type="text"
          value={page2Store.name}
          onChange={this.onNameChange}
        />
        <button onClick={this.addName}>add</button>
        <ul>
          {page2Store.nameList.map((name, index) => {
            return <li key={index}>{name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Page2
