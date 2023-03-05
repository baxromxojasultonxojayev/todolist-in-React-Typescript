import React, { useState } from "react";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todoSingle" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todoSingleText">{todo.todo}</s>
      ) : (
        <span className="todoSingleText">{todo.todo}</span>
      )}

      <div className="icons">
        <span
          className="editIcon"
          onClick={() => {
            if (!edit && !todo.isDone) {
            }
            setEdit(!edit);
          }}
        >
          Edit
        </span>
        <span className="deleteIcon" onClick={() => handleDelete(todo.id)}>
          Delete
        </span>
        <span className="doneIcon" onClick={() => handleDone(todo.id)}>
          Done
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
