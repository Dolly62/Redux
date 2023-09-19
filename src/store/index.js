import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "incrementby2") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "decrementby2"){
    return {
        counter: state.counter - 2,
    }
  }
  return state;
};

const store = createStore(counterReducer);
// console.log(store.getState());

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });

export default store;
