import dbConnect from "../Config/database.js";

const createUser = async (user) => {
  const db = await dbConnect();
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  const [result] = await db.execute(sql, [user.name, user.email]);
  return result.insertId;
};

const getUsers = async () => {
  const db = await dbConnect();
  const [rows] = await db.execute("SELECT * FROM users");
  return rows;
};

const getUserById = async (id) => {
  const db = await dbConnect();
  const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

const updateUser = async (id, user) => {
  const db = await dbConnect();
  const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  await db.execute(sql, [user.name, user.email, id]);
};

const deleteUser = async (id) => {
  const db = await dbConnect();
  const sql = "DELETE FROM users WHERE id = ?";
  await db.execute(sql, [id]);
};

export { createUser, getUsers, getUserById, updateUser, deleteUser };
