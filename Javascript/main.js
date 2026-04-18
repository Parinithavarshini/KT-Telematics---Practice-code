import {sayHello} from "./module.js";
let message = sayHello("Parinitha");
console.log(message);

//dynamic import
async function load(){
    let m=await import("./module.js");
    console.log(m.name);
    console.log(m);
}
load();