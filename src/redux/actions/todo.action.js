import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO } from "../constants";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      descricao: todo,
      feito: false,
    },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
}

export function toogleTodo(id) {
  return {
    type: TOOGLE_TODO,
    payload: id,
  };
}
