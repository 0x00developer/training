const express = require("express");
const morgan = require("morgan");

const usersRouter = require("./routers/users.router");
const loginRouter = require("./routers/loginRouter");

const server = express();

server.set("port", process.env.PORT || 4000);

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/users/", usersRouter);
server.use("/login/", loginRouter);

server.get("/", (req, res) => {
  res.json({ message: "root works!" });
});
module.exports = server;
