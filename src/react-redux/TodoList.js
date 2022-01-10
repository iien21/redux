import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Input, List } from "antd";
import { connect } from "react-redux";
import { ADD_ITEM, CHANGE_INPUT } from "./store/actionTypes";

// 无状态组件
// const TodoList = (props) => {
//   let { inputValue, inputChange, clickBtn, list } = props;
//   return (
//     <div style={{ margin: "10px" }}>
//       <div>
//         <Input
//           style={{ width: "250px", marginRight: "10px" }}
//           value={inputValue}
//           onChange={inputChange}
//         />
//         <Button type="primary" onClick={clickBtn}>
//           提交
//         </Button>
//       </div>
//       <div style={{ margin: "10px", width: "300px" }}>
//         <List
//           bordered
//           dataSource={list}
//           renderItem={(item, index) => <List.Item>{item}</List.Item>}
//         />
//       </div>
//     </div>
//   );
// };

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { inputValue, inputChange, clickBtn, list } = this.props;
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
            renderItem={(item, index) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }

  changeInputValue(e) {
    // console.log(e);
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value,
    // };
    // const action = changeInputAction(e.target.value);
    // store.dispatch(action);
  }
  storeChange() {
    // this.setState(store.getState());
  }
  clickBtn(e) {
    // const action = {
    //   type: ADD_ITEM,
    //   //   value: e.target.value,
    // };
    // const action = addItemAction();
    // store.dispatch(action);
  }
  deleteItem(index) {
    // console.log(index);
    // const action = {
    //   type: DELET_ITEM,
    //   index,
    // };
    // const action = deleteItemAction(index);
    // store.dispatch(action);
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
  };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
