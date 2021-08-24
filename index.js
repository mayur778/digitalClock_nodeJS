const http = require("http");
const fs = require("fs");
const requests = require("requests");
const { requested } = require("requests/requested");

const indexFile = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {
    res.end(indexFile);
});

let port = process.env.PORT || 8000;

server.listen(port, () => {
        console.log(`listening to port no at ${port}`);
});


