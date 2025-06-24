import React, { useState, useEffect } from "react";
import { TodoList,AddTodo,TodoFilter } from "../components";
import { setTodo, getTodo } from '../utils';
import "./Todo.css";

export const Todo = () => {
  const [inputName, setInputName] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [checkedStates, setCheckedStates] = useState([]);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const storedTodos = getTodo() || [];
    if (
      todos.length === 0 &&
      checkedStates.length === 0 &&
      storedTodos.length > 0
    ) {
      setTodos(storedTodos.map((todo) => todo.name));
      setCheckedStates(storedTodos.map((todo) => todo.checked));
      return;
    }

    if (todos.length > 0) {
      const todosToStore = todos.map((todo, index) => ({
        name: todo,
        checked: checkedStates[index],
      }));
      setTodo(todosToStore);
    }
  }, [todos, checkedStates]);

  const handleAddTodo = async (e) => {
    if (e.key === "Enter") {
      if (!inputName.trim()) {
        setError("Todo cannot be empty");
        return;
      }

      const isDuplicate = todos.some(
        (todo) => todo.trim().toLowerCase() === inputName.trim().toLowerCase()
      );

      if (isDuplicate) {
        setError("Duplicate todo not allowed");
        return;
      }

      if (editIndex !== null) {
        setTodos((prevTodos) =>
          prevTodos.map((todo, i) => (i === editIndex ? inputName : todo))
        );
        // setCheckedStates((prev) => [
        //   ...prev.slice(0, editIndex),
        //   false,
        //   ...prev.slice(editIndex + 1),
        // ]);
        setCheckedStates((prev) => prev);
        setEditIndex(null);
      } else {
        setTodos((prev) => [...prev, inputName]);
        setCheckedStates((prev) => [...prev, false]);
      }
      setInputName("");
      setError("");
    }
  };

  const checkHandler = (index) => {
    setCheckedStates((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((a, i) => i !== index);
    const updatedCheckedStates = checkedStates.filter((a, i) => i !== index);
    setTodos(updatedTodos);
    setCheckedStates(updatedCheckedStates);

    const updatedStoredTodos = updatedTodos.map((todo, index) => ({
      name: todo,
      checked: updatedCheckedStates[index],
    }));

    setTodo(updatedStoredTodos);
    if (editIndex === index) {
      setInputName("");
      setEditIndex(null);
    }
  };

  const handleEdit = (index) => {
    setInputName(todos[index]);
    setEditIndex(index);
  };

  const allTodos = todos.map((todo, index) => ({ todo, index }));
  const progressTodos = allTodos.filter(({ index }) => !checkedStates[index]);
  const completedTodos = allTodos.filter(({ index }) => checkedStates[index]);

  let filteredTodos = allTodos;
  if (activeTab === "progress") filteredTodos = progressTodos;
  if (activeTab === "complete") filteredTodos = completedTodos;

  return (
    <>
      <div className="containers mt-5 mb-5">
        <h1 className="head">To-Do</h1>
        <AddTodo
          inputName={inputName}
          setInputName={setInputName}
          handleAddTodo={handleAddTodo}
          error={error}
          setError={setError}
        />
        <TodoFilter activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id={`nav-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`nav-${activeTab}-tab`}
          >
            <TodoList
              todos={filteredTodos}
              checkedStates={checkedStates}
              checkHandler={checkHandler}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
};