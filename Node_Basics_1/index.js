console.log("This is coming from the nodeJs which is a javascript runtime!");
const http = require("http");
const app = require(".src/app.js");
const { log } = require("console");
const PORT = process.env.PORT || 4000;

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("This is coming from the server we created!");
//     res.end();
//   })
//   .listen(8080);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running on POrt ${PORT} 🚀`);
});
