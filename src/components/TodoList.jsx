import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  checkedStates,
  checkHandler,
  handleDelete,
  handleEdit,
  error,
}) => (
  <>
    {error && <div className="error-message text-danger mb-2">{error}</div>}

    <ul className="list-group mt-3">
      {todos.map(({ todo, index }) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          checked={checkedStates[index]}
          checkHandler={checkHandler}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  </>
);