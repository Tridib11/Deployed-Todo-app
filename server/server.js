const PORT = process.env.PORT ?? 8000;
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();

const pool = require("./db");

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

app.delete("/todos/:id",(req,res)=>{
  const {id} = req.params;
  try {
    const deleteTodo = pool.query(`DELETE FROM todos WHERE id=$1`,[id]);
    res.json(deleteTodo);
  } catch (err) {
    console.error(err);
  }
})


//signup

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try{
    
  }
  catch(err){
    console.error(err)
  }
})

//login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try{

  }
  catch(err){
    console.error(err)
  }
})

//listing port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
