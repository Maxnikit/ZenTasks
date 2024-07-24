// TODO add types for todos

export type TodoListType = {
  name: string;
  id: number;
};
export type TodoTaskType = {
  id: number;
  title: string;
  completed: boolean;
  text: string;
  listId: number;
};
