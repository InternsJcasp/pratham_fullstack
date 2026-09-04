import useLocalStorage from "../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../utils/constant";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage(STORAGE_KEYS.TASKS, []);

  const addTask = (task) => {
    setTasks((previousTasks) => [task, ...previousTasks]);
  };

  const updateTask = (taskId, updates) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              ...updates,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId),
    );
  };

  const getTaskById = (taskId) => {
    return tasks.find((task) => task.id === taskId);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        getTaskById,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
