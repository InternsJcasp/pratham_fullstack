import { Search } from "lucide-react";

const TaskFilters = ({ search, setSearch, status, setStatus }) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search tasks..."
          aria-label="Search tasks"
          className="w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 pr-4 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>

      {/* Status Filter */}
      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
        aria-label="Filter tasks by status"
        className="rounded-md border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      >
        <option value="all">All Tasks</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskFilters;
