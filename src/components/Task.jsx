import React, { useContext, useState } from "react";
import TodoContext from "../state/GlobalState";

const Task = ({ todo }) => {
  const [toggle, setToggle] = useState(false);
  const { deleteTask } = useContext(TodoContext);

  const handleChange = () => {
    deleteTask(todo.id);
  };
  return (
    <>
      <li onClick={() => setToggle(!toggle)} className={toggle ? "active" : ""}>
        <span>{todo.task}</span>
        <button onClick={handleChange} className="delete-btn">
          <i className="fas fa-trash-alt icons"></i>
        </button>
        {/* <span>{date}</span> */}
      </li>
    </>
  );
};

export default Task;
