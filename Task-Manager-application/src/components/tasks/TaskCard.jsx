import { CheckCircle2, Edit, Trash2 } from "lucide-react";

const TaskCard = ({ task, onEdit, onDelete, onStatusChange }) => {
  const priorityClasses = {
    low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  const statusClasses = {
    todo: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    "in-progress":
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    completed:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  };

  return (
    <article className="rounded-md border border-gray-200 bg-white p-5 transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            className={`truncate text-lg font-semibold ${
              task.status === "completed"
                ? "text-gray-400 line-through"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
              {task.description}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex shrink-0 gap-1">
          <button
            type="button"
            onClick={() => onEdit(task)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Edit task"
          >
            <Edit size={17} />
          </button>

          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="rounded-lg p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
            aria-label="Delete task"
          >
            <Trash2 size={17} />
          </button>
        </div>
      </div>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            priorityClasses[task.priority]
          }`}
        >
          {task.priority}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusClasses[task.status]
          }`}
        >
          {task.status.replace("-", " ")}
        </span>
      </div>

      {/* Due Date */}
      {task.dueDate && (
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Due: {task.dueDate}
        </p>
      )}

      {/* Status */}
      <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4 dark:border-gray-800">
        <CheckCircle2 size={17} className="text-gray-500 dark:text-gray-400" />

        <select
          value={task.status}
          onChange={(event) => onStatusChange(task.id, event.target.value)}
          className="rounded-lg border border-gray-200 bg-transparent px-3 py-1.5 text-sm outline-none dark:border-gray-700 dark:text-white"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </article>
  );
};

export default TaskCard;
