import AddTaskForm from "@/components/webapp/AddTaskForm/AddTaskForm";
import TodoList from "@/components/webapp/TodoList.tsx/TodoList";

export default function page() {
  return (
    <div>
      <h1>WebApp Header</h1>
      <AddTaskForm />
      <TodoList />
    </div>
  );
}
