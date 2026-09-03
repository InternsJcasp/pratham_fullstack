import apiClient from "./apiClient";

// Get all tasks
export const getTasks = async () => {
  const response = await apiClient.get("/tasks");
  return response.data;
};

// Get single task
export const getTaskById = async (id) => {
  const response = await apiClient.get(`/tasks/${id}`);
  return response.data;
};

// Create task
export const createTask = async (task) => {
  const response = await apiClient.post("/tasks", task);
  return response.data;
};

// Update task
export const updateTask = async (id, task) => {
  const response = await apiClient.put(`/tasks/${id}`, task);
  return response.data;
};

// Delete task
export const deleteTask = async (id) => {
  const response = await apiClient.delete(`/tasks/${id}`);
  return response.data;
};

// Get employees
export const getEmployees = async () => {
  const response = await apiClient.get("/employees");
  return response.data;
};
