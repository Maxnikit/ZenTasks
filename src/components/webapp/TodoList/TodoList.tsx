import React from "react";
import { useAppSelector } from "@/lib/hooks";
import TodoTask from "@/components/webapp/TodoTask/TodoTask";

const TodoList = () => {
  // Accessing the todos state from the store
  const todos = useAppSelector((state) => state.todos.value);

  return (
    <ul className="divide-y divide-neutral-700">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoTask task={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
