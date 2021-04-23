import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO } from "../constants";

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOOGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.feito = !todo.feito;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}

export default todoReducer;
