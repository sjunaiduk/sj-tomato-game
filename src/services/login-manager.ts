import User from "../models/User";

const fetchUsers = (): User[] => {
  const users = localStorage.getItem("users");

  if (users) {
    return JSON.parse(users);
  }

  return [];
};

const register = (user: User): void => {
  const users = fetchUsers().filter((u) => u.name !== user.name);
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const login = (user: User): void => {
  const users = fetchUsers();
  const foundUser = users.find((u) => u.name === user.name);
  if (!foundUser) {
    register(user);
  }
};
