/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

import Button from "../common/Button";
import Input from "../common/Input";

import { TASK_PRIORITY } from "../../utils/constant";
import { createTask } from "../../utils/taskUtils";

const initialForm = {
  title: "",
  description: "",
  priority: TASK_PRIORITY.MEDIUM,
  dueDate: "",
};

const TaskForm = ({ task, onSubmit, onCancel }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (task) {
      setForm({
        title: task.title,
        description: task.description,
        priority: task.priority,
        dueDate: task.dueDate,
      });
    } else {
      setForm(initialForm);
    }
  }, [task]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title.trim()) return;

    if (task) {
      onSubmit(form);
    } else {
      onSubmit(createTask(form));
    }

    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 ">
      <Input
        id="title"
        name="title"
        label="Task Title"
        placeholder="Enter task title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Description
        </label>

        <textarea
          id="description"
          name="description"
          rows="4"
          placeholder="Describe your task..."
          value={form.description}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Priority
          </label>

          <select
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          >
            <option value={TASK_PRIORITY.LOW}>Low</option>
            <option value={TASK_PRIORITY.MEDIUM}>Medium</option>
            <option value={TASK_PRIORITY.HIGH}>High</option>
          </select>
        </div>

        <Input
          id="dueDate"
          name="dueDate"
          type="date"
          label="Due Date"
          value={form.dueDate}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>

        <Button type="submit">{task ? "Update Task" : "Create Task"}</Button>
      </div>
    </form>
  );
};

export default TaskForm;
