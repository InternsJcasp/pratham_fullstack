export const validateRegisterForm = (formData) => {
  const { name, email, password, role } = formData;

  if (!name.trim()) {
    return "Name is required";
  }

  if (name.trim().length < 3) {
    return "Name must be at least 3 characters";
  }

  if (!email.trim()) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  if (!password) {
    return "Password is required";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  if (!role) {
    return "Please select a role";
  }

  return "";
};

export const validateLoginForm = (formData) => {
  const { email, password } = formData;

  if (!email.trim()) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }

  if (!password) {
    return "Password is required";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return "";
};
