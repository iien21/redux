import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import axios from "axios";
import { getListAction } from "./actionCreators";
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList);
}
function* getList() {
  //   axios
  //     .get(
  //       "https://mock.mengxuegu.com/mock/61a9c941c140524f189210d8/getList/getList"
  //     )
  //     .then((res) => {
  //       const data = res.data;
  //       const action = getListAction(data);
  //       put(action);
  //     });

  const res = yield axios.get(
    "https://mock.mengxuegu.com/mock/61a9c941c140524f189210d8/getList/getList"
  );
  const action = getListAction(res.data);
  yield put(action)
}
export default mySaga;
