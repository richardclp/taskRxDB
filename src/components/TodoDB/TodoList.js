import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  onToggle,
  onEdit,
  onDelete,
  onSaveEdit,
  onCancelEdit,
  editingId,
}) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.length === 0 ? (
        <p>No hay tareas todavía</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
            onSaveEdit={(text) => onSaveEdit(todo.id, text)}
            onCancelEdit={onCancelEdit}
            editingId={editingId}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
