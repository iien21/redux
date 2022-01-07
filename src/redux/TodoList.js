import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";
import store from "./store";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction,
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
import axios from "axios";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // console.log(store.getState());
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }
  componentDidMount() {
    axios
      .get(
        "https://mock.mengxuegu.com/mock/61a9c941c140524f189210d8/getList/getList"
      )
      .then((res) => {
        console.log(111, res);
        const data = res.data;
        const action = getListAction(data);
        store.dispatch(action);
      });
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
    // console.log(e);
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value,
    // };
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
  clickBtn(e) {
    // const action = {
    //   type: ADD_ITEM,
    //   //   value: e.target.value,
    // };
    const action = addItemAction();
    store.dispatch(action);
  }
  deleteItem(index) {
    // console.log(index);

    // const action = {
    //   type: DELET_ITEM,
    //   index,
    // };
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;