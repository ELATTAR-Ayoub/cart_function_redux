import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case DELETE_ITEM: {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index === -1) return state;
    
      const newItems = [...state.items];
      newItems.splice(index, 1);
    
      return {
        ...state,
        items: newItems,
      };
    }
    default: {
      return state;
    }
  }
};

// ...state,
//         numOfItems: state.numOfItems + 1,