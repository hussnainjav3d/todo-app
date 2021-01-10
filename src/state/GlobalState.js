import { createContext, useReducer } from "react";
import TodoReducer from "./Reducer";

const initTodos = [
  // { id: 1, task: "Payload" },
  // { id: 5, task: "Work From Home" },
];

const TodoContext = createContext(initTodos);
export default TodoContext;

export const TodoProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TodoReducer, initTodos);
  const addTask = (todo) => {
    dispatch({
      type: "ADD",
      payload: { task: todo.task, id: todo.id },
    });
  };
  const deleteTask = (id) => {
    dispatch({
      type: "COMPLETED",
      payload: id,
    });
  };
  return (
    <TodoContext.Provider value={{ todos: state, addTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
};
