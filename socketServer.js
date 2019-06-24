const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
let app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", connection => {
  let supportAvailable = false;
  setInterval(() => {
    supportAvailable = !supportAvailable;
    connection.emit(
      supportAvailable ? `SUPPORT_AVAILABLE` : `SUPPORT_NOT_AVAILABLE`
    );
  }, 10000);
});

app.use(express.static("public"));
app.use(express.static("public/css"));
const port = 2015;
server.listen(port, () => {
  console.info(`Redux Server is listening on port ${port}.`);
});
