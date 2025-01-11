import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "/todo", file: "routes/todo.tsx" },
] satisfies RouteConfig;
