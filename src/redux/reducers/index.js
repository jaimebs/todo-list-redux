import { combineReducers } from "redux";
import todoReducer from "./todo.reducer";

const rootReduce = combineReducers({
  todos: todoReducer,
});

export default rootReduce;
