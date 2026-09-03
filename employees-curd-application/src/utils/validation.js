export const validateEmployee = (formData) => {
  const errors = {};

  // Name
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Enter a valid email address";
  }

  // Phone
  if (!formData.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    errors.phone = "Phone must contain 10 digits";
  }

  // Department
  if (!formData.department) {
    errors.department = "Department is required";
  }

  // Salary
  if (!formData.salary) {
    errors.salary = "Salary is required";
  } else if (Number(formData.salary) <= 0) {
    errors.salary = "Salary must be greater than 0";
  }

  return errors;
};
