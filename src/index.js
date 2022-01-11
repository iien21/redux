import React from "react";
import ReactDOM from "react-dom";
// import TodoList from "./redux/TodoList";//redux
// import TodoList from "./redux-thunk/TodoList";//redux-thunk
// import TodoList from "./redux-saga/TodoList";//redux-saga
// ReactDOM.render(<TodoList />, document.getElementById("root"));//redux,redux-thunk,redux-saga

/**react-redux**/
// import TodoList from "./react-redux/TodoList";
// import { Provider } from "react-redux";
// import store from "./react-redux/store";
// ReactDOM.render(
//   <Provider store={store}>
//     <TodoList />
//   </Provider>,
//   document.getElementById("root")
// );
/**react-redux**/

/**react-redux&&redux-thunk**/
import TodoList from "./redux&thunk/TodoList";
import { Provider } from "react-redux";
import store from "./redux&thunk/store";
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById("root")
);
/**react-redux&&redux-thunk**/
