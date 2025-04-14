import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import TodoEdit from "./TodoEdit";

const TodoItem = ({
  todo,
  onToggle,
  onEdit,
  onDelete,
  onSaveEdit,
  onCancelEdit,
  editingId,
}) => {
  const isEditing = editingId === todo.id;

  return (
    <li
      style={{
        padding: "10px",
        margin: "5px 0",
        border: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: todo.done ? "#f0f0f0" : "white",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}
      >
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />

        {isEditing ? (
          <TodoEdit todo={todo} onSave={onSaveEdit} onCancel={onCancelEdit} />
        ) : (
          <span
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              flex: 1,
            }}
            onDoubleClick={() => onEdit(todo)}
          >
            {todo.name}
          </span>
        )}
      </div>

      {!isEditing && (
        <div style={{ display: "flex", gap: "5px" }}>
          <button
            onClick={() => onEdit(todo)}
            style={{
              padding: "3px 8px",
              background: "#2196F3",
              color: "white",
              border: "none",
            }}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            style={{
              padding: "3px 8px",
              background: "#f44336",
              color: "white",
              border: "none",
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
