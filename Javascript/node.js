console.log("Hello I am node js");

const hello=(hname)=>{
    console.log(`Hello , ${hname}!`);
}
hello("Kalai");

//like window obj in browser we have global obj in node js
console.log(global);

//prints the directory
console.log(__dirname);
//directory with file name
console.log(__filename);

setTimeout(()=>{                        
    console.log("Event and non blocking");  
},2000);           //after 2 sec only event is triggered and code is 

console.log("before");