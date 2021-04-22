import React from "react";
import Input from "../../components/Input";
import TodoItem from "../../components/TodoItem";
import { useSelector } from "react-redux";
import "./style.css";

export default function Home() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div className="container">
      <h1>Todo List - Redux</h1>
      <div className="box">
        <div className="box__todo">
          {!todos.length ? (
            <div className="box__vazia">Lista vazia. 😒</div>
          ) : (
            todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem id={todo.id} descricao={todo.descricao} />
              </div>
            ))
          )}
        </div>
        <Input />
      </div>
    </div>
  );
}
