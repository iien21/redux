import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,getMyListAction
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }
  componentDidMount() {
    const action = getMyListAction();
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
  clickBtn(e) {
    const action = addItemAction();
    store.dispatch(action);
  }
  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
