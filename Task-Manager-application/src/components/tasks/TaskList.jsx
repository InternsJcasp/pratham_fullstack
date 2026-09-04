import EmptyState from "../common/EmptyState";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete, onStatusChange }) => {
  if (!tasks.length) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskList;