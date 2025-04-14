import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoForm = ({ onAdd, disabled }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Qué necesitas hacer?"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{ flex: 1, padding: "8px" }}
      />
      <button
        type="submit"
        disabled={disabled || !newTodo.trim()}
        style={{ padding: "8px 15px" }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default TodoForm;
