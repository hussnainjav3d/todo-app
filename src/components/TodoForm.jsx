import React, { useState, useContext } from "react";
import TodoContext from "../state/GlobalState";
const TodoForm = () => {
  const [newTask, setTask] = useState("");
  const { addTask } = useContext(TodoContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask({
      task: newTask,
      id: new Date(),
    });
    setTask("");
  };
  return (
    <form className="form-control" onSubmit={handleAddTask}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Enter Task"
        required
      />
      <input type="submit" value="Add Task" className="btn" />
    </form>
  );
};

export default TodoForm;
