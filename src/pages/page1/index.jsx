import React, { Component } from 'react'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('page1Store', 'page2Store')
@observer
class Page1 extends Component {
  static propTypes = {
    page1Store: PropTypes.object
  }

  render() {
    const { page1Store } = this.props

    return (
      <div>
        <h2>counter</h2>
        <p>num: {page1Store.count}</p>
        <div>
          <p>
            <Button onClick={page1Store.countUp}>count up</Button>
          </p>
          <p>
            <Button onClick={page1Store.countDown}>count down</Button>
          </p>
        </div>
      </div>
    )
  }
}

export default Page1
