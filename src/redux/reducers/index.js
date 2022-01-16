import { combineReducers } from "redux";
import { actionTypes } from "../actionsTypes";

const initialState = [];

const animalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.animals.ADD_ANIMALS:
      return action.payload;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  animals: animalsReducer,
});
