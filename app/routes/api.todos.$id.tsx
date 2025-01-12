import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { deleteTodo, updateTodoStatus } from "~/lib/todo";

export async function action({ request, params }: ActionFunctionArgs) {
  try {
    const id = params.id;
    if (!id) {
      throw json({ error: "Todo ID is required" }, { status: 400 });
    }

    switch (request.method) {
      case "PATCH": {
        const { completed } = (await request.json()) as { completed: boolean };
        const todo = await updateTodoStatus(id, completed);
        return json(todo);
      }

      case "DELETE": {
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
