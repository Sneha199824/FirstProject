import { Add_To_Cart } from './Constant';

const initialState = [];

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      return [...state, action.data];
    default:
      return state;
  }
};
