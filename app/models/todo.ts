export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  completedAt: Date | null;
}

export type TodoInput = Pick<Todo, "title">;
