import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const addItem = (hoodie) => {
  return {
    type: ADD_ITEM, payload: hoodie
  };
};

const deleteItem = (hoodie) => {
  return {
    type: DELETE_ITEM, payload: hoodie
  };
};

export { addItem, deleteItem };