require("./server.js");

const fs = require("fs");
const http = require("http");

const message = "HELLO UCHE AM YOU";
console.log(message + " " + "I am a software developer");
console.log(`${message}` + " " + "I am a software developer");

// how to create file using the fs module

// fs.writeFile('message.txt', message, (err, data) => {
//      err ? console.log(err) : console.log("file created")
// })

// how to update file using fs module

// fs.appendFile('message.txt', "I am a software developer and i wan blow", (err, data) => {
//     err ? console.log(err) : console.log("file updated")
// })
// how to read file using fs module

fs.readFile("message.txt", (err, data) => {
  err ? console.log(err) : console.log(data.toString());
});

// how to delete file using fs module

// fs.unlink('message.txt', (err, data) => {
//     err ? console.log(err) : console.log("file deleted")
// }   )

// how to create a directory using fs module

// fs.mkdir('newDir', (err, data) => {
//     err ? console.log(err) : console.log("directory created")
// })

// how to delete a directory using fs module

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    err ? console.log(err) : res.write(data);
    res.end();
  });
  res.write("hello world");
});

server.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});

// how to create a server with http
