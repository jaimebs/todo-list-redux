import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todo.action";

import "./style.css";

export default function Input() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  function adicionarTodo(e) {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
    inputRef.current.focus();
  }

  return (
    <form onSubmit={adicionarTodo} className="input">
      <input
        type="text"
        ref={inputRef}
        placeholder="Digite para adicionar na lista."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
