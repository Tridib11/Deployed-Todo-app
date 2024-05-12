const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const pool = require("./db");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

//get all todos

app.get("/todos/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  console.log(userEmail);
  try {
    const todos = await pool.query("SELECT * FROM todos WHERE user_email =$1", [
      userEmail,
    ]);
    res.json(todos.rows);
  } catch (err) {
    console.error(err);
  }
});

//Create a new Todo

app.post("/todos", async (req, res) => {
  const { user_email, title, progress, date } = req.body;
  console.log(user_email, title, progress, date);
  const id = uuidv4();
  try {
    const newTodo = await pool.query(
      `INSERT INTO todos (id,user_email,title,progress,date) VALUES($1,$2,$3,$4,$5)`,
      [id, user_email, title, progress, date]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err);
  }
});

//edit todo

app.put("/todos/:id", async (req, res) => {
  console.log("enterted");
  const { id } = req.params;
  const { user_email, title, progress, date } = req.body;
  try {
    const editTodo = await pool.query(
      `UPDATE todos SET user_email=$1,title=$2,progress=$3,date=$4 WHERE id=$5`,
      [user_email, title, progress, date, id]
    );
    res.json(editTodo);
  } catch (err) {
    console.error(err);
  }
});

//delete todo

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = pool.query(`DELETE FROM todos WHERE id=$1`, [id]);
    res.json(deleteTodo);
  } catch (err) {
    console.error(err);
  }
});

//signup

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  try {
    await pool.query(
      "INSERT INTO users (email,hashed_password) VALUES($1,$2)",
      [email, hashedPassword]
    );
    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });
    res.json({ email, token });
  } catch (err) {
    console.error(err);
    if (err) {
      res.json({ detail: err.detail });
    }
  }
});

//login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (!users.rows.length) return res.json({ detail: "User does not exist" });
    const success = await bcrypt.compare(
      password,
      users.rows[0].hashed_password
    );
    const token = jwt.sign({ email }, "secret", { expiresIn: "1h" });
    if (success) {
      res.json({ email: users.rows[0].email, token });
    }else{
      res.json({ detail: "Login Failed" });
    }
  } catch (err) {
    console.error(err);
  }
});

//listing port

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
