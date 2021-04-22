import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/actions/todo.action";
import { BiTrash } from "react-icons/bi";
import "./style.css";

export default function TodoItem({ id, descricao }) {
  const dispatch = useDispatch();

  function removeTodoDaLista() {
    dispatch(removeTodo(id));
  }
  return (
    <div className="todo">
      <div>{descricao}</div>
      <button type="button" onClick={removeTodoDaLista}>
        <BiTrash size={18} />
      </button>
    </div>
  );
}
