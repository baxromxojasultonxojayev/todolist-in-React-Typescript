import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((t) => (
        <li>
          <SingleTodo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
        </li>
      ))}
    </div>
  );
};

export default TodoList;
