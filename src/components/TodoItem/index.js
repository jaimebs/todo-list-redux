import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toogleTodo } from "../../redux/actions/todo.action";
import { BiTrash } from "react-icons/bi";
import "./style.css";

export default function TodoItem({ id, descricao, feito }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  function removeTodoDaLista() {
    dispatch(removeTodo(id));
  }

  function toogleTodoItem() {
    setChecked(!checked);
    dispatch(toogleTodo(id));
  }

  return (
    <div className="todo">
      <input type="checkbox" checked={checked} onChange={toogleTodoItem} />
      <div style={{ textDecoration: feito ? "line-through" : "" }}>
        {descricao}
      </div>
      <button type="button" onClick={removeTodoDaLista}>
        <BiTrash size={18} />
      </button>
    </div>
  );
}
