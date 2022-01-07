import React from "react";
import ReactDOM from "react-dom";
// import TodoList from "./redux/TodoList";
// import TodoList from "./redux-thunk/TodoList";
// import TodoList from "./redux-saga/TodoList";
// ReactDOM.render(<TodoList />, document.getElementById("root"));


import TodoList from "./react-redux/TodoList";
import { Provider } from "react-redux";
import store from "./react-redux/store";
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById("root")
);
