const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const PORT = 3000;
const db = require("./controllers");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../fe/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

const {
  userRouters,
  authRouters,
  postsRouter,
  commentRouter,
  likeRouter,
} = require("./routes");
app.use("/auth", authRouters);
app.use("/posts", postsRouter);
app.use("/comments", commentRouter);
app.use("/likes", likeRouter);
app.use("/users", userRouters);

app.listen(PORT, () => {
  // db.sequelize.sync({ alter: true });
  console.log(`Server running at port ${PORT}`);
});
