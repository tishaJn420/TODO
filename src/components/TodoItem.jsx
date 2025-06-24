import React from "react";

export const TodoItem = ({
  todo,
  index,
  checked,
  checkHandler,
  handleDelete,
  handleEdit,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => checkHandler(index)}
          className="form-check-input me-2"
        />
        <span
          style={{ cursor: "pointer" }}
          onClick={() => checkHandler(index)}
        >
          {todo}
        </span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};