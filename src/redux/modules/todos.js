// action value
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// action creator 만들어서 export
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// state init
const initialState = [
  {
    id: 1,
    title: "react 연습하기",
    isDone: false,
  },
  {
    id: 2,
    title: "redux 연습하기",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);

    case SWITCH_TODO: {
      const filteredState = state.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
      console.log(filteredState);
      console.log(state);
      console.log(state.todos);
      return filteredState;
    }

    default:
      return state;
  }
};

export default todos;
