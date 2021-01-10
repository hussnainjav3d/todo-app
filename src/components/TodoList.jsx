import React, { useContext } from "react";
import Task from "./Task";
import TodoContext from "../state/GlobalState";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  // console.log(todo);
  return (
    <>
      <h3>Tasks to be Done</h3>
      <hr />
      <ul className="task-list">
        {todos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
