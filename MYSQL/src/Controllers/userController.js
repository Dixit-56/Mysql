import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../Models/userModel.js";

const createUserHandler = async (req, res) => {
  try {
    const userId = await createUser(req.body);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsersHandler = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByIdHandler = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    await updateUser(req.params.id, req.body);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  createUserHandler,
  getUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
};
