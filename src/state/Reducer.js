const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "COMPLETED":
      return state.filter((state) => state.id !== action.payload);
    default:
      return state;
  }
};

export default TodoReducer;
