const express = require("express");

console.log("Starting the application...");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Trusted packages lab is running");
});

const server = app.listen(port, "127.0.0.1", () => {
  console.log("Application listening on port 3000");
  console.log("Open http://127.0.0.1:3000");
});

server.on("error", (error) => {
  console.error("Server startup failed:");
  console.error(error);
});
