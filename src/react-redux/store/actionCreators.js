import axios from "axios";
import { CHANGE_INPUT, ADD_ITEM, DELET_ITEM, GET_LIST } from "./actionTypes";

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});

export const deleteItemAction = (index) => ({
  type: DELET_ITEM,
  index,
});

export const getListAction = (data) => ({
  type: GET_LIST,
  data,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://mock.mengxuegu.com/mock/61a9c941c140524f189210d8/getList/getList"
      )
      .then((res) => {
        console.log(111, res);
        const data = res.data;
        const action = getListAction(data);
        dispatch(action);
      });
  };
};
