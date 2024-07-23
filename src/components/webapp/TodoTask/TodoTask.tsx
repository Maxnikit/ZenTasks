import { TodoTaskType } from "@/lib/features/todos/todosTypes";
export default function TodoTask({ task }: { task: TodoTaskType }) {
  return (
    <div className="flex flex-row gap-2">
      <p>
        {task.text} - {task.completed ? "Completed" : "Incomplete"}
      </p>
    </div>
  );
}
