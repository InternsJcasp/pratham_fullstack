import { useMemo, useState } from "react";
import { Plus } from "lucide-react";

import Button from "../components/common/Button";
import Modal from "../components/common/Modal";

import TaskStats from "../components/tasks/TaskStats";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import TaskFilters from "../components/tasks/TaskFilter";

import { useTasks } from "../hooks/useTasks";

const Dashboard = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const filteredTasks = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    return tasks.filter((task) => {
      const matchesSearch =
        !normalizedSearch ||
        task.title.toLowerCase().includes(normalizedSearch) ||
        task.description.toLowerCase().includes(normalizedSearch);

      const matchesStatus = status === "all" || task.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, search, status]);

  const openCreateModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  const handleSubmit = (task) => {
    if (editingTask) {
      updateTask(editingTask.id, task);
    } else {
      addTask(task);
    }

    closeModal();
  };

  const handleDelete = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (confirmed) {
      deleteTask(taskId);
    }
  };

  const handleStatusChange = (taskId, newStatus) => {
    updateTask(taskId, {
      status: newStatus,
    });
  };

  return (
    <>
      <div className="space-y-8">
        <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage and track your tasks.
            </p>
          </div>

          <Button onClick={openCreateModal} className="flex rounded-md">
            <Plus size={18} className="mr-2" />
            Add Task
          </Button>
        </section>

        <TaskStats tasks={tasks} />

        <section className="space-y-5">
          <TaskFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
          />

          <TaskList
            tasks={filteredTasks}
            onEdit={openEditModal}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        </section>
      </div>

      <Modal
        open={isModalOpen}
        title={editingTask ? "Edit Task" : "Create Task"}
        onClose={closeModal}
      >
        <TaskForm
          task={editingTask}
          onSubmit={handleSubmit}
          onCancel={closeModal}
        />
      </Modal>
    </>
  );
};

export default Dashboard;
