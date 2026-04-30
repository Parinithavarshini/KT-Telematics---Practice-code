console.log("Hello I am node js");

const hello=(hname)=>{
    console.log(`Hello , ${hname}!`);
}
hello("Kalai");

//like window obj in browser we have global obj in node js
console.log(global);

//prints the current folder path
console.log(__dirname);
//print current file full path
console.log(__filename);

setTimeout(()=>{                        
    console.log("Event and non blocking");  
},2000);           //after 2 sec only event is triggered and code is 

console.log("before");

//using fs module to read a file content
// const fs=require("fs");
// fs.readFile("content.js","utf-8",(err,data)=>{
//     console.log(data);
// });

//using fs module to write a file content

// const fs1=require("fs");
// fs1.writeFile("node.txt","New content is written",()=>{
//     console.log("Saved!");
// });


// http module

// const http=require("http");
// const server=http.createServer((req,res)=>{ 
//     res.write("Hello World"); 
//     res.end(); 
// });
// server.listen(3000);

// const fs2=require("fs");
// const path = require("path");
// const filePath = path.join(__dirname, "content.js");
// fs.readFile(filePath,"utf-8",(err,data)=>{
//     console.log(data);
// });

// const os = require("os");
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus());

const myUrl=new URL("https://example.com/home");
console.log(myUrl.hostname);

//Working with file system

//Reading content from file
const f1=require("fs");
f1.readFile("content.js","utf-8",(err,data)=>{
    console.log(data);
});

//writing content to file
// const f2=require("fs");
// f2.writeFile("content.js","KT Telematics",()=>{
//     console.log("Content saved");
// });


//createReadStream
// const f3 = require("fs");
// const stream = f3.createReadStream("practice.js",{encoding: "utf-8",highWaterMark: 100
// });
// stream.on("data", (chunk) => {
//     console.log("-------------------");
//     console.log(chunk);
// });

//createWriteStream
// const fs=require("fs");
// const stream=fs.createWriteStream("content.js");
// stream.write("Hello");
// stream.write("World");
// stream.end();

//read files in current folder
const fs=require("fs");
fs.readdir("./",(err, files)=>{
    if(err) console.log(err);
    else console.log(files);
});

//create new folder
const fs1 = require("fs")
fs1.mkdir("newFolder",(err) => {
    if (err) console.log(err);
    else console.log("Folder created");
});

fs1.rm("newFolder",{ recursive: true }, () => {});


//Creating a http server
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.setHeader("Content-Type","text/html");
//     res.write("<h1>Welcome</h1>");
//     res.end("<footer>Process completed</footer>");
// });
// server.listen(3000,()=>{
//     console.log("Server running-Port 3000");
// });

//req = req.url,req.method

//routing
// const ht1=require("http");
// const fss= require("fs");
// const server = ht1.createServer((req, res)=>{
//     if(req.url === "/"){
//         res.end("Home Page");
//     }
//     else if(req.url === "/about"){
//         fss.readFile("./dom.txt", (err, data) => {
//             res.end(data);
//         });
//     }
//     else if(req.url === "/contact"){
//         res.end("contact page");
//     }
//     else{
//         res.statusCode = 404;
//         res.end("page not found");
//     }
// });
// server.listen(3000, () =>{
//     console.log("server running on port 3000");
// });

// const http = require("http");
// http.createServer((req, res) => {
//     if(req.method==="GET") {
//         res.end("This is GET request");
//     }
//     else if(req.method==="POST") {
//         res.end("This is POST request");
//     }
// }).listen(3000);

//Express.js - in node.js server and api easily created using express.js
// const express=require("express");
// const app=express();
// app.get('/',(req,res)=>res.send("Home page"));    --name of the function,middleware
// app.get('/about',(req,res)=>res.send("About Page"));
// app.listen(3000);

// const express=require("express");
// const app=express();
// app.get('/',(req,res)=>res.send("Home page"));
// app.get('/about',(req,res)=>res.send("About Page"));
// app.post('/add',(req,res)=>res.send("data created"));
// app.put("/add",(req,res)=>res.send("Update user"));
// app.delete("/add",(req,res)=>res.send("Delete user"));
// app.listen(3000);

//npm install express sequelize pg pg-hstore body-parser cors