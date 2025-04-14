import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBan } from "@fortawesome/free-solid-svg-icons";

const TodoEdit = ({ todo, onSave, onCancel }) => {
  const [editText, setEditText] = useState(todo.name);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onSave(editText);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "5px", flex: 1 }}
    >
      <input
        ref={inputRef}
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        style={{ flex: 1, padding: "5px" }}
      />
      <button
        type="submit"
        disabled={!editText.trim()}
        style={{
          padding: "3px 8px",
          background: "#4CAF50",
          color: "white",
          border: "none",
        }}
      >
        <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
      <button
        type="button"
        onClick={onCancel}
        style={{
          padding: "3px 8px",
          background: "#f44336",
          color: "white",
          border: "none",
        }}
      >
        <FontAwesomeIcon icon={faBan} />
      </button>
    </form>
  );
};

export default TodoEdit;
