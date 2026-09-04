import { CheckCircle2, Clock, ListTodo, Timer } from "lucide-react";

import { getTaskStats } from "../../utils/taskUtils";

const TaskStats = ({ tasks }) => {
  const stats = getTaskStats(tasks);

  const cards = [
    {
      title: "Total Tasks",
      value: stats.total,
      icon: ListTodo,
    },
    {
      title: "Todo",
      value: stats.todo,
      icon: Clock,
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: Timer,
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-md border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.title}
              </p>

              <Icon size={20} className="text-blue-600" />
            </div>

            <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              {card.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStats;
