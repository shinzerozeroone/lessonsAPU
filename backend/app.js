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

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "glavdb",
//     password: "12345",
//     port: "5432",
//   });

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/comments/:lectureId", async (req, res) => {
  const lectureId = req.params.lectureId;

  try {
    const { rows: comments } = await pool.query(
      "SELECT * FROM comments WHERE lecture_id = $1 ORDER BY id",
      [lectureId]
    );

    const groupedComments = comments.reduce((acc, comment) => {
      if (!comment.parent_id) {
        acc.push({ ...comment, replies: [] });
      } else {
        const parentComment = acc.find((c) => c.id === comment.parent_id);
        if (parentComment) {
          parentComment.replies.push(comment);
        }
      }
      return acc;
    }, []);

    res.status(200).json(groupedComments);
  } catch (error) {
    console.error("Ошибка при получении комментариев:", error);
    res.status(500).json({ error: "Ошибка при получении комментариев" });
  }
});

app.post("/comment/:lectureId", async (req, res) => {
  const lectureId = req.params.lectureId;
  const { text, parent_id } = req.body;

  if (!text) {
    return res
      .status(400)
      .json({ error: "Текст комментария не может быть пустым" });
  }

  try {
    await pool.query(
      "INSERT INTO comments (lecture_id, text, parent_id) VALUES ($1, $2, $3)",
      [lectureId, text, parent_id || null]
    );
    res.status(201).json({ message: "Комментарий успешно добавлен" });
  } catch (error) {
    console.error("Ошибка при добавлении комментария:", error);
    res.status(500).json({ error: "Ошибка при добавлении комментария" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
