const authenticate = (email = "", password = "") => {
  return { user: { email, password, role: "admin", id: "123" } };
};

export { authenticate };
