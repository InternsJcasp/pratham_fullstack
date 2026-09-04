const MOCK_USER = {
  email: "admin@gmail.com",
  password: "123456",
  name: "Admin User",
};

export const loginUser = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    return {
      success: true,
      user: {
        name: MOCK_USER.name,
        email: MOCK_USER.email,
      },
      token: "mock-token-12345",
    };
  }

  return {
    success: false,
    message: "Invalid email or password",
  };
};
