import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createTodo, getAllTodos } from "~/lib/todo";
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
    if (request.method !== "POST") {
      throw json(
        { error: `Method ${request.method} not allowed` },
        { status: 405 }
      );
    }

    const input = (await request.json()) as TodoInput;
    const todo = await createTodo(input);
    return json(todo);
  } catch (error) {
    console.error("API error:", error);
    throw json(
      { error: "An error occurred processing your request" },
      { status: 500 }
    );
  }
}
