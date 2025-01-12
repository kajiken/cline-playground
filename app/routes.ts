import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/todos", "routes/api.todos.tsx"),
] satisfies RouteConfig;
