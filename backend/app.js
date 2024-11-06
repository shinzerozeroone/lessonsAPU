const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Pool } = require("pg");

const pool = new Pool({
  user: "leushin_aa",
  host: "glavdb",
  database: "InfoComments",
  password: "3fshGmpyWD",
  port: "5432",
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/comments/:lectureId", async (req, res) => {
  const { lectureId } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM comments WHERE lecture_id = $1 ORDER BY created_at DESC",
      [lectureId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.post("/comments", async (req, res) => {
  const { text, lectureId } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO comments (text, lecture_id) VALUES ($1, $2) RETURNING *",
      [text, lectureId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
