import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodoStatus,
} from "~/lib/todo";
import type { TodoInput } from "~/models/todo";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const todos = await getAllTodos();
    return json(todos);
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    throw json({ error: "Failed to fetch todos" }, { status: 500 });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    switch (request.method) {
      case "POST": {
        const input = (await request.json()) as TodoInput;
        const todo = await createTodo(input);
        return json(todo);
      }

      case "PATCH": {
        const url = new URL(request.url);
        const id = url.pathname.split("/").pop();
        if (!id) {
          throw json({ error: "Todo ID is required" }, { status: 400 });
        }

        const { completed } = (await request.json()) as { completed: boolean };
        const todo = await updateTodoStatus(id, completed);
        return json(todo);
      }

      case "DELETE": {
        const url = new URL(request.url);
        const id = url.pathname.split("/").pop();
        if (!id) {
          throw json({ error: "Todo ID is required" }, { status: 400 });
        }

        const todo = await deleteTodo(id);
        return json(todo);
      }

      default:
        throw json(
          { error: `Method ${request.method} not allowed` },
          { status: 405 }
        );
    }
  } catch (error) {
    console.error("API error:", error);
    throw json(
      { error: "An error occurred processing your request" },
      { status: 500 }
    );
  }
}
