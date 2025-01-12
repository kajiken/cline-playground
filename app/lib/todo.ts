import type { Todo, TodoInput } from "../models/todo";
import prisma from "./db";

export async function getAllTodos(): Promise<Todo[]> {
  return prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createTodo(input: TodoInput): Promise<Todo> {
  return prisma.todo.create({
    data: {
      title: input.title,
    },
  });
}

export async function updateTodoStatus(
  id: string,
  completed: boolean
): Promise<Todo> {
  return prisma.todo.update({
    where: { id },
    data: {
      completed,
      completedAt: completed ? new Date() : null,
    },
  });
}

export async function deleteTodo(id: string): Promise<Todo> {
  return prisma.todo.delete({
    where: { id },
  });
}
