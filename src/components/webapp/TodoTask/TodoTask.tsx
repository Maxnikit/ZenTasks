import { TodoTaskType } from "@/lib/features/todos/todosTypes";
import { useAppDispatch } from "@/lib/hooks";
import {
  toggleTodo,
  changeTodoText,
  changeTodoTitle,
} from "@/lib/features/todos/todosSlice";
export default function TodoTask({ task }: { task: TodoTaskType }) {
  const dispatch = useAppDispatch();

  function handleToggle() {
    dispatch(toggleTodo(task.id));
  }
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
    </div>
  );
}
