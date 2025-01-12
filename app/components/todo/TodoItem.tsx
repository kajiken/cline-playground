import type { Todo } from "../../models/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span
          className={`text-lg ${
            todo.completed ? "text-gray-400 line-through" : "text-gray-700"
          }`}
        >
          {todo.title}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col text-sm">
          <span className="text-gray-500">
            作成: {new Date(todo.createdAt).toLocaleDateString()}
          </span>
          {todo.completedAt && (
            <span className="text-green-600">
              完了: {new Date(todo.completedAt).toLocaleDateString()}
            </span>
          )}
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          削除
        </button>
      </div>
    </div>
  );
}
