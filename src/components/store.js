import { createStore } from "redux";
// import { configureStore } from "redux";
const initiaState = {
  count: 0,
};

function reducer(state = initiaState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
// const store = configureStore(reducer);
export default store;
