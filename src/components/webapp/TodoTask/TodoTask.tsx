import { TodoTaskType } from "@/lib/features/todos/todosTypes";
import { useAppDispatch } from "@/lib/hooks";
import {
  toggleTodo,
  changeTodoText,
  changeTodoTitle,
  removeTodo,
} from "@/lib/features/todos/todosSlice";
import { useState } from "react";
export default function TodoTask({ task }: { task: TodoTaskType }) {
  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState(false);

  function handleToggle() {
    dispatch(toggleTodo(task.id));
  }

  const handleDropDown = () => {
    console.log(isOpen);
    setOpen(!isOpen);
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(task.id));
  };
  return (
    // TODO add teal focus ring. Possible in entire project? Look for it in tailwind guides
    <div className="flex flex-row items-center gap-2 p-2 hover:bg-neutral-800">
      <input
        className="h-4 w-4 rounded accent-teal-500"
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />

      <p>{task.title}</p>
      <p>{task.text}</p>
      <button
        className="border border-teal-500 px-2 text-teal-500"
        type="button"
        onClick={() =>
          dispatch(changeTodoText({ id: task.id, newText: "NEW TEXT" }))
        }
      >
        add new text
      </button>
      <button
        className="border border-teal-500 px-2 text-teal-500"
        type="button"
        onClick={() =>
          dispatch(changeTodoTitle({ id: task.id, newTitle: "NEW TITLE" }))
        }
      >
        add new title
      </button>
      <div>
        {" "}
        <button
          id="dropdownMenuIconHorizontalButton"
          onClick={handleDropDown}
          className="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        <div
          className={`absolute z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700 ${isOpen ? "block" : "hidden"}`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Move to
              </button>
            </li>
          </ul>
          <div className="py-2">
            <button
              type="button"
              onClick={handleRemoveTodo}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
