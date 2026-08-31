const DEPARTMENTS = ["Engineering", "Marketing", "Design", "Product"];

export const fetchEmployees = async () => {
  const response = await fetch("https://dummyjson.com/users");
  if (!response.ok) {
    throw new Error(`Server returned status ${response.status}`);
  }

  const resData = await response.json();
  const rawList = resData.users || [];

  return rawList.map((user, index) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email:
      user.email ||
      `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@company.com`,
    salary: user.age * 2500 + 40000,
    age: user.age,
    department: DEPARTMENTS[index % DEPARTMENTS.length],
    image: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
  }));
};
