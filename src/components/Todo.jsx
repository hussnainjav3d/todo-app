import React from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProvider } from "../state/GlobalState";

const Todo = () => {
  return (
    <TodoProvider>
      <Header></Header>
      <section className="section-container">
        <TodoForm />
        <TodoList />
      </section>
    </TodoProvider>
  );
};

export default Todo;
