import { observable, action } from 'mobx'

export default class Page1Store {
  @observable count = 0

  @action.bound
  countUp() {
    this.count++
  }

  @action.bound
  countDown() {
    this.count--
  }
}
