import { observable, action } from 'mobx'

export default class Page2Store {
  @observable.ref nameList = []

  @observable name = ''

  @action.bound
  updateName(value) {
    this.name = value
  }

  @action.bound
  addName(name) {
    const nList = this.nameList.concat(name)
    this.nameList = nList
  }
}
