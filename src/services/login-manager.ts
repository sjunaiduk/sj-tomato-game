import User from "../models/User";

const fetchUsers = (): User[] => {
  const users = localStorage.getItem("users");

  if (users) {
    return JSON.parse(users);
  }

  return [];
};

const register = (user: User): void => {
  const users = fetchUsers().filter((u) => u.username !== user.username);
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

const setLoggedInUser = (user: User): void => {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
};
export const addUserToStorageAndSetLoggedInUser = (user: User): void => {
  const users = fetchUsers();
  const foundUser = users.find((u) => u.username === user.username);
  if (!foundUser) {
    register(user);
  }
  setLoggedInUser(user);
};

export const clearUserFromStorage = (): void => {
  localStorage.removeItem("loggedInUser");
};

export const getLoggedInUserFromStorage = (): User | null => {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};
