import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";
import { connect } from "react-redux";
import { ADD_ITEM, CHANGE_INPUT } from "./store/actionTypes";

import store from "./store";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getTodoList,
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }
  render() {
    let { inputValue, inputChange, clickBtn, list, deleteItem } = this.props;
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            style={{ width: "250px", marginRight: "10px" }}
            value={inputValue}
            onChange={inputChange}
          />
          <Button type="primary" onClick={clickBtn}>
            提交
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  deleteItem(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: CHANGE_INPUT,
        value: e.target.value,
      };
      dispatch(action);
    },
    clickBtn() {
      let action = { type: ADD_ITEM };
      dispatch(action);
    },
    deleteItem(index) {
      const action = deleteItemAction(index);
      store.dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
