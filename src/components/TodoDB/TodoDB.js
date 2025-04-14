import React, { useEffect, useState } from "react";
import { initializeDB } from "../../db/initDB";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoDB = () => {
  const [db, setDb] = useState(null);
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("Inicializando...");

  // Inicializar la base de datos
  useEffect(() => {
    let database;
    let subscription;

    const initDB = async () => {
      try {
        setStatus("Creando base de datos...");
        database = await initializeDB();
        setDb(database);
        setStatus("Base de datos lista");

        // Suscripción a cambios
        subscription = database.todos.find().$.subscribe((todosDocs) => {
          setTodos(todosDocs.map((doc) => doc.toJSON()));
        });
      } catch (error) {
        setStatus(`Error: ${error.message}`);
        console.error(error);
      }
    };

    initDB();

    return () => {
      if (subscription) subscription.unsubscribe();
      if (database && !database.destroyed) {
        database.destroy().catch(console.error);
      }
    };
  }, []);

  // Handlers
  const handleAdd = async (text) => {
    try {
      await db.todos.insert({
        id: `todo_${Date.now()}`,
        name: text,
        done: false,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error al añadir todo:", error);
      setStatus(`Error al añadir: ${error.message}`);
    }
  };

  const handleToggle = async (id) => {
    try {
      const todo = await db.todos.findOne(id).exec();
      if (todo) await todo.patch({ done: !todo.done });
    } catch (error) {
      console.error("Error al actualizar todo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const todo = await db.todos.findOne(id).exec();
      if (todo) await todo.remove();
    } catch (error) {
      console.error("Error al eliminar todo:", error);
    }
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
  };

  const handleSaveEdit = async (id, text) => {
    try {
      const todo = await db.todos.findOne(id).exec();
      if (todo) {
        await todo.patch({
          name: text,
          timestamp: new Date().toISOString(),
        });
      }
      setEditingId(null);
    } catch (error) {
      console.error("Error al editar todo:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>RxDB(Base de Datos)</h1>
      <p>
        Estado: <strong>{status}</strong>
      </p>

      <div
        style={{
          margin: "20px 0",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <h3>Añadir nueva tarea</h3>
        <TodoForm onAdd={handleAdd} disabled={!db} />
      </div>

      <div>
        <h3>Tareas ({todos.length})</h3>
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          editingId={editingId}
        />
      </div>
    </div>
  );
};

export default TodoDB;
