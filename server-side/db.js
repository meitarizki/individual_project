const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lala1505",
  database: "selection",
});

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   const sql = "CREATE SCHEMA social
//     CREATE TABLE social.users (
//     id INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
//     username VARCHAR(45) NOT NULL,
//     email VARCHAR(45) NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     coverPic VARCHAR(255),
//     profilePic VARCHAR(255),
//     fullname VARCHAR(255),
//     bio VARCHAR(45),
//     status VARCHAR(45),
//     verification_token VARCHAR(255),
//     reset_password_token VARCHAR(255)
//   );

//   CREATE TABLE social.posts (
//     id INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
//     caption VARCHAR(255),
//     image VARCHAR(255),
//     userId INT NOT NULL,
//     createdAt DATETIME,
//     FOREIGN KEY (userId) REFERENCES sosmed.users(id) ON DELETE CASCADE ON UPDATE CASCADE
//   );

//   CREATE TABLE social.comments (
//     id INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
//     `desc` VARCHAR(255),
//     createdAt DATETIME,
//     userId INT NOT NULL,
//     postId INT NOT NULL,
//     FOREIGN KEY (userId) REFERENCES sosmed.users(id) ON DELETE CASCADE ON UPDATE CASCADE,
//     FOREIGN KEY (postId) REFERENCES sosmed.posts(id) ON DELETE CASCADE ON UPDATE CASCADE
//   );

//   CREATE TABLE social.likes (
//     id INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
//     userId INT NOT NULL,
//     postId INT NOT NULL,
//     FOREIGN KEY (userId) REFERENCES sosmed.users(id) ON DELETE CASCADE ON UPDATE CASCADE,
//     FOREIGN KEY (postId) REFERENCES sosmed.posts(id) ON DELETE CASCADE ON UPDATE CASCADE
//   );"

//   db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

module.exports = { db };
