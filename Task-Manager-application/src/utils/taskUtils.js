export const createTask = ({ title, description, priority, dueDate }) => {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    description: description.trim(),
    priority,
    dueDate,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

export const getTaskStats = (tasks) => {
  return {
    total: tasks.length,

    todo: tasks.filter((task) => task.status === "todo").length,

    inProgress: tasks.filter((task) => task.status === "in-progress").length,

    completed: tasks.filter((task) => task.status === "completed").length,
  };
};

