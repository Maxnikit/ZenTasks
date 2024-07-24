import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { addTodo } from "@/lib/features/todos/todosSlice";
// TODO get listId from currently selected list. 0 is placeholder
const listId = 0;

export default function AddTaskForm() {
  const [task, setTask] = useState("");

  const dispatch = useAppDispatch();
  const handleAddTask = (title: string, listId: number) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
      text: "",
      listId: listId,
    };
    dispatch(addTodo(newTodo));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!task.trim()) {
      return;
    }
    console.log("Submitted task:", task);
    handleAddTask(task, listId);
    setTask("");
    console.log(task);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <label htmlFor="taskInput" className="sr-only">
        Add Task
      </label>
      <input
        id="taskInput"
        value={task}
        name="task"
        type="text"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="+ Add task"
        onChange={handleChange}
      />
    </form>
  );
}
