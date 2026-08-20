export function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Check if a task's due date has passed
export function isOverdue(dueDate) {
  if (!dueDate) return false;
  const today = new Date().setHours(0, 0, 0, 0);
  const taskDate = new Date(dueDate).setHours(0, 0, 0, 0);
  return taskDate < today;
}

export function sanitizeHTML(str) {
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;    
}
