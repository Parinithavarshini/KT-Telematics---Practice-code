//recursion
function power(x,n) {
  if (n==1) return x;     
  return x*power(x,n-1);  
}
console.log(power(2,3));

//loop
function power1(x,n){
  let res = 1;
  for(let i=0;i<n;i++){
    res *= x;
  }
  return res;
}
console.log(power1(2,2));

//linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};
console.log(list);
list={value:5,next:list};
console.log(list);

function printList(list){
  if(list == null) return;    
  console.log(list.value);     
  printList(list.next);        
}
printList(list);

//Rest parameters
function sum(...nums){
    console.log(nums);
};
sum(1,2,3,4);

function adding(...numbers1){
    let sum=0;
    for(let n of numbers1){
        sum+=n;
    }
    return sum;
};
console.log(adding(1,2,3,4,5));

let array2=[1,2,3,4,5,6];
console.log(Math.max(...array2));           //6

let array3=[1,2,3,4,5,6];
console.log(Math.max(array3));             //NaN

let array4=[5,4,3,2,1];
console.log(array4);
let arrcopy4=[...array4];
console.log(arrcopy4);
arrcopy4[0]=9;
console.log(arrcopy4);
console.log(array4);

let objects1={a:0,b:1};
let obcopy={...objects1};
obcopy.a=10;
console.log(objects1);
console.log(obcopy);

//Variable scope
{
    let place="erode";
    console.log(place);
}
//console.log(place);

var pl=10;
function place(){
    console.log(pl);
}
place();
console.log(pl);

//Nested function
function f1(){
    const name="Kavi";
    function f2(){
        console.log(name);
    }
    f2();
}
f1();

function count(){
    let cou=0;
    return function(){
        return cou++;
    }
}
let counter=count();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/*window.obn={name:"kala",id:900};
console.log(obn.id);*/                        //Manually create a object in window object

globalThis.obn={name:"kala",id:900};
console.log(obn.id);

//Function object
function Hello(){};
console.log(Hello.name);

let func=function(){};
console.log(func);

let arr=[function(){}];
console.log(arr[0].name);

function new1(a,b){};
console.log(new1.length);

function new2(a,b,...res){};
console.log(new2.length);

//Function property
function f(){}
f.count=0;
f.count++;
console.log(f.count);

//Function closure
function counts() {
  let count=0;           
  return function() {
    return count++;         
  }
}
let c=counts();
console.log(c()); 
console.log(c()); 
console.log(c()); 

//Named function expression
let function1=function func(name){
    if(!name){
        func("Johny");
    }
    else{
        console.log("Hello "+name);
    }
}
function1();

//New function
function add(a,b){                         //Normal function
  return a+b;
}
console.log(add(6,6));

let sub=new Function('n1','n2','return n1-n2');           //New function
console.log(sub(9,3));

/*let news='alert("Login success")';
let funcnews=new Function(news);
funcnews();*/

function next(){
  const text="Hello";
  return function()
  {
    console.log("Login success "+text);
  };
}
next()();

globalThis.value=10;
function next1(){
  //const value="Hello";
  return new Function('console.log(value)');
}
next1()();

let next2=new Function('value','console.log(value)');
next2("Hello");

//Scheduling
//setTimeout
// let set1=setTimeout(()=>{
//   console.log("Helloooo");
// },10000);
// //clearTimeout(set1);

// //setInterval
// // let set2=setInterval(()=>{
// //   console.log("After 5 sec");
// // },5000);
// // clearInterval(set2);

// function pow(a,b){
//   console.log(Math.pow(a,b));
// }
// setTimeout(pow,1000,2,3);

// console.log("Start");
// setTimeout(()=>{
//   console.log("Middle");
// },3000);
// console.log("End");

// let counted=0;
// setTimeout(function run(){
//   console.log("Print fastly");
//   counted++;
//   if(counted<3){
//     setTimeout(run,2000);
//   }
// },4000);

// setTimeout(()=>{
//   console.log("World");
// },0);
// console.log("Hello");

// //Decorator  - doubt
// // function greet(name){
// //   return "Hello "+name;
// // }
// // function deco(func){
// //   return function(name){
// //     console.log("Before");
// //     let res=func(name);
// //     console.log("After");
// //     return res;
// //   };
// // }
// // greet=deco(greet);
// // console.log(greet("John"));

// //Function binding
// let objfunc={ 
//   name:"kalai",
//   age:34,
//   hello(){
//     console.log(this.name);
//   }
// };
// setTimeout(objfunc.hello,1000);      //reference


// let objfunc1={ 
//   name:"kalai",
//   age:34,
//   hello(){
//     console.log(this.name);
//   }
// };
// setTimeout(()=>(objfunc1.hello()),1000);

// let news1=objfunc1.hello.bind(objfunc1);
// setTimeout(news1,12000);

// function binding(msg,name){
//   console.log(msg+" "+name);
// }
// let newbind=binding.bind(null,"hello");  //call,apply
// newbind("john");

// let obj8={
//   name:"Kamalaa",
//   show(){
//     setTimeout(()=>{
//       console.log(this.name);
//     },1000);
//   }
// };
// obj8.show();

console.log("--------Property flags and descriptors-----------");
//Property descriptor
let user={
  name:"kanika",
  age:24
};
let descriptor=Object.getOwnPropertyDescriptor(user,"name");
console.log(descriptor);

//Writable flag
Object.defineProperty(user,"name",{writable:false});
user.name="John";
console.log(user);                                     //use strict - cannot assign value to read only property

//enumerable flag
Object.defineProperty(user,"name",{enumerable:false});
for(let x in user){
  console.log(x);
}

//configurable flag
Object.defineProperty(user,"name",{configurable:false,enumerable:true});
delete user.name;
for(let x in user){
  console.log(x);
}

//new property
Object.defineProperty(user,"email",{value:"kanika@gmail.com" ,enumerable:true});
for(let x in user){
  console.log(x);
}
console.log(user);

//multiple new properties
Object.defineProperties(user,{
  "Phone":{value:"9876567896",enumerable:true},
  "State":{value:"Tamilnadu",enumerable:true}
});
for(let x in user){
  console.log(x);
}
console.log(user);

//extensions,seal and freeze
// Object.preventExtensions(user);      //cannot add new properties but can modify existing one
// Object.seal(user);                   //cannot add or delete,but modify existing one
// Object.freeze(user);                 //cannot do anything

console.log(Object.isFrozen(user));
console.log(Object.isSealed(user));
console.log(Object.isExtensible(user));

//Property getters and setters
let ob={
  fname:"john",
  lname:"doe",
  id:101,
  get fullname(){
    return `${this.fname} ${this.lname}`;
  },
  set ids(value){
    this.id=value;
  }
};
console.log(ob.fullname);
ob.ids="123";
console.log(ob.id);

let person={
  name:"John",
  get getname(){
    return this.name;
  },
  set setname(value){
    this.name=value;
  }
};
console.log(person.getname);
person.setname="kani";
console.log(person.name);

let validate={
  age1:0,
  set age(value){
    if(value>=0){
      this.age1=value;
    }
    else{
      console.log("Invalid age");
    }
  },
  get age(){
    return this.age1;
  }
};
console.log(validate.age);
validate.age=-5;
console.log(validate.age);
validate.age=25;
console.log(validate.age);   //op 0

//Questions
let stri="1234.4567";
parseFloat(stri);
let result=Math.floor(stri*10)/10;
console.log(result);

function check(str){
  if(/^[0-9]/.test(str)){
    console.log("Starts with number");
  }
  else{
    console.log("Starts with string");
  }
};
check("34djdl09");
check("jhdg567");


//Prototypes
//objects
let parent={
  greet(){
    console.log("Helloo");
  }
};
let child={};

child.__proto__=parent;
child.greet();

let child2=Object.create(parent);
child2.greet();

//F.prototype
function Person(name){     //constructor in class why func
  this.name=name;
  this.hello=function(){
    console.log("hello "+this.name);
  }
};
let user1=new Person("john");
let user2=new Person("jack");
console.log(user1);
console.log(user2);

function Person1(name){
  this.name=name;
};
Person1.prototype.hello=function(){
  console.log("hi "+this.name);
}
let user3=new Person1("john");
let user4=new Person1("jack");
console.log(user3);
user3.hello();
console.log(user4);
user4.hello();

//Native prototype
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Object.prototype));

Array.prototype.sayhi=function(){
  console.log("heloo");
}
console.log(Object.getOwnPropertyNames(Array.prototype));

console.log(Object.getOwnPropertyNames(Function.prototype));
console.log(Object.getOwnPropertyNames(Number.prototype));
console.log(Object.getOwnPropertyNames(Boolean.prototype));
console.log(Object.getOwnPropertyNames(Date.prototype));
console.log(Object.getOwnPropertyNames(RegExp.prototype));
console.log(Object.getOwnPropertyNames(Error.prototype));

//Methods defined in prototype is shared by all the objects
let objectpro={};
console.log(objectpro.toString());

// let objectpro1=Object.create(null);
// objectpro1.name="kala";
// console.log(objectpro1.name);
// console.log(objectpro1.toString());            //TypeError: objectpro1.toString is not a function

//Class - blueprint for creating object
class User{
  constructor(name){
    this.name=name;
  }
  hello(){
    console.log(this.name);
  }
}
let users1=new User("Johny");
users1.hello();

class Use{}
console.log(typeof Use);

//Class Expression 
let classexp=class{
  Sayhi(){
    console.log("Hello world");
  }
}
let use=new classexp();
use.Sayhi();

//Named class Expression
let classexp1=class Myclass{
  Sayhi(){
    console.log(Myclass);
  }
}
new classexp1().Sayhi();

//Computed method name
class first{
  ['say'+'hi'](){
    console.log("Computed method");
  }
}
new first().sayhi();

//Class fields
class second{
  name="kalai";
  sayhi(){
    console.log(this.name);
  }
}
new second().sayhi();

//Inheritance
class Animal{
  run(){
    console.log("Animal runs");
  }
}
class Rabbit extends Animal{
  jump(){
    console.log("Rabbit jumps");
  }
}
let r=new Rabbit();
r.run();
r.jump();

//method overriding
class Animals{
  run(){
    console.log("Animal runs");
  }
}
class Rabbits extends Animals{
  run(){
    console.log("Rabbit jumps");
  }
}
let ra=new Rabbits();
ra.run();

//super
class Animal1{
  run(){
    console.log("Animal runs fast");
  }
}
class Rabbit1 extends Animal1{
  run(){
    super.run();
    console.log("Rabbit jumps quickly");
  }
}
let rab=new Rabbit1();
rab.run();

//Constructor
class Animalc{
  constructor(name){
    this.name=name;
    console.log(name);
  }
}
class Rabbitc extends Animalc{
  constructor(name){
    super(name);
    this.name=name.toUpperCase();
  }
}
let obr=new Rabbitc("Bunny");
console.log(obr.name);

//Static methods
class Sayhello{
  static Say(){
    console.log("Hello I am henry");
  }
} 
Sayhello.Say();

//this keyword in static method
class Case1{
  static add(){
    console.log(this===Case1)
  }
}
Case1.add();

//direct assignment to the class
class Case2{}
Case2.hello=function(){                    
  console.log("Hello john");
}
Case2.hello();

//Static properties
class Art{
  static publish="Drawing";
}
console.log(Art.publish);

//Static Inheritance
class Bird{
  static name="Parrot";
  static fly(){
    console.log("Parrot flies");
  }
}
class Parrot extends Bird{}
console.log(Parrot.name);
Parrot.fly();

//public
class Method1{
  work="Government";
}
let p=new Method1();
console.log(p.work);

//protected
class Mobile{
  battery=100;
  charge(){
    this.battery-=10;
    console.log(this.battery);
  }
}
let protect=new Mobile();
protect.charge();
// console.log(protect.battery);

//protected + child class
class Vehicle{
  state="kerala";
}
class Lorry extends Vehicle{
  run(){
    console.log("State is "+this.state);
  }
}
let ve=new Lorry();
ve.run();

//private
class Mobile1{
  #battery=100;
  charge(){
    this.#battery-=10;
    console.log(this.#battery);
  }
}
let protect1=new Mobile1();
protect1.charge();
//console.log(protect1.#battery);

//private + child
// class School{
//   #name="abc school";
// }
// class Student extends School{
//   study(){
//     console.log(this.#name);                     //Private field '#name' must be declared in an enclosing class
//   }
// }
// let std=new School();
// std.study();

//instanceof
class Rat{}
let rats=new Rat();
console.log(rats instanceof Rat);

//instanceof - inheritance
class Animal2{}
class Dog extends Animal2{}
let ani=new Dog();
console.log(ani instanceof Dog);
console.log(ani instanceof Animal2);

//array
let arra=[1,3,4];
console.log(arra instanceof Array);
console.log(arra instanceof Object);

//toString.call()
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(123));
console.log(Object.prototype.toString.call("abc"));
console.log(Object.prototype.toString.call(true));

//hasInstance
class Color{
  static [Symbol.hasInstance](obj){
    return obj.eat===true;
  }
}
let obj={eat:true};
console.log(obj instanceof Color);

//mixin            - adding methods to class without inheritance
let hellomixin={
  hello(){
    console.log("hello "+this.name);
  }
}
class Hi{
  constructor(name){
    this.name=name;
  }
}
Object.assign(Hi.prototype,hellomixin);
let ass=new Hi("Jack");
ass.hello();

//mixin inheritance
let himixin={
  hello(){
    console.log("Hello");
  }
}
class Ani{
  eat(){
    console.log("Eating");
  }
}
class Monk extends Ani{}
Object.assign(Ani.prototype,himixin);
let di=new Monk();
di.eat();
di.hello();

//Error handling - try...catch
//console.log(a);                         //ReferenceError: a is not defined -to handle this we use try catch
console.log("hello");

try{
  console.log(a);
}
catch(err){
  console.log("Error handled");
}

//No error - flow
try{
  console.log("try 1");
  console.log("try 2");
}
catch(err){
  console.log("Catch here");
}

//with error - flow
try{
  console.log("Start");
  x;
  console.log("End")
}
catch(err){
  console.log("catch block here");
}

//Error object
try{
  x;
}
catch(err){
  console.log("Type : "+err.name);
  console.log("Message : "+err.message);
}

// try{                                  //cannot handle syntax error handles only runtime error
//   {{{
// }
// catch(err){
//   console.log("hello");
// }

//setTimeout
// try{
//   setTimeout(()=>{                //this runs after 1 sec so error is not handled and error is displayed
//     x;
//   },1000);
// }
// catch(err){
//   console.log("Error handled");
// }

// setTimeout(()=>{
//   try{
//     x;
//   }
//   catch(err){
//     console.log("Error handled while using setTimeout");
//   }
// },1000);

//Real time use
let json="{name kaviya}";
try{
  let user=JSON.parse(json);
}
catch(err){
  console.log("Inavlid JSON "+err.name);
}

//throw 
let objerr={age:45};
try{
  if(!objerr.name){
    throw new Error("Name missing");
  }
}
catch(err){
  console.log(err.name);
  console.log(err.message);
}

//rethrow
try{
try{
  x;
}
catch(err){
  if(err instanceof SyntaxError){
    console.log("Syntax error");
  }
  else{
    throw err;
  }
}
}
catch(err){
  console.log("Error handled outside =>"+err.message);
}

//finally
try{
  console.log("Try runs");
}
catch{
  console.log("catch runs");
}
finally{
  console.log("Always runs");
}

//return in try
function test(){
  try{
  return 1;
}
finally{
  console.log("Successful execution");
}
}
console.log(test());

//custom error - own error message instead of general message
class MyError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "Error ";
  }
}
function checking(name){
  try {
    if (!name) {
      throw new MyError("Name is not here");
    }
    console.log("Welcome " + name); 
  } 
  catch (err) {
    console.log(err.name + ": " + err.message);
  }
}
checking("");  
checking("Kaviya");

//synchronous
console.log("A");
console.log("B");

//Asynchronous
// console.log("a");
// setTimeout(()=>{
//   console.log("b");
// },1000);
// console.log("c");

//callback
function entry(name,callback){
  console.log("Hello "+name);
  callback();
}
function exit(){
  console.log("Bye");
}
entry("John",exit);

//callback hell
// setTimeout(()=>{
//   console.log("Step 1");
//   setTimeout(()=>{
//     console.log("Step 2");
//     setTimeout(()=>{
//       console.log("Step 3");
//     },1000);
//   },1000);
// },1000);

//call stack-here javascript keeps track of what function is currently running
//web api - handle aync task outside js engine
//Callback Queue - A queue where completed async callbacks wait for execution
//event loop means it will continuously check whether call stack is empty if yes, take next task from queue, it will decide when to run async code

//Promises
//resolve
// let promise=new Promise(function(resolve,reject){   //executor function runs immediately when the promise is created
//   setTimeout(() => {
//     resolve("success promise");
//   },1000);
// });
// promise.then(res=>{
//   console.log(res);
// })
//reject
// let promise1=new Promise(function(resolve,reject){   //executor function runs immediately when the promise is created
//   setTimeout(() => {
//     reject("failed promise");
//   },1000);
// });
// promise1.catch(err=>{
//   console.log(err);
// })

//handling promises
// let promise2=new Promise(function(resolve,reject){   //executor function runs immediately when the promise is created
//   setTimeout(() => {
//     resolve("failed promise");
//   },1000);
// });
// promise2.then(res=>{                //then will run whenever promise state is changed from pending to fulfilled
//   console.log(res);
// })
// .catch(err=>{                      //catch is used to handle errors 
//   console.log("Error: ",err);
// })
// .finally(()=>{                    //finally block runs always
//   console.log("Execution completed");
// })
//promises will be in microtask has high priority executed first

//Promise chaining  - executing async operations step by step by using .then() by passing results from one to next
// let prom=new Promise(resolve=>{
//   setTimeout(()=>resolve(1),1000);
// })
// .then(result=>{
//   console.log(result);
//   return result*2;
// })
// .then(result=>{
//   console.log(result);
//   return result*2;
// })
// .then(result=>{
//   console.log(result);
// })

//Returning a promise
// let prom1=new Promise(resolve=>{
//   setTimeout(()=>resolve(2),1000);
// })
// .then(result=>{
//   console.log(result);
//   return new Promise(resolve=>{
//     setTimeout(()=>resolve(result*10),1000);
//   })
// })
// .then(result=>{
//   console.log(result);
// })

// let prom2=new Promise((resolve,reject)=>{
//   throw new Error("Error");              //throw inside promise works like reject
// })
// .catch(err=>console.log(err.message));

// //Promise API
// Promise.all([                      //all promises should be success then only it will run
//   Promise.resolve(10),
//   Promise.resolve(20),
//   Promise.resolve(30),
// ])
// .then(result=>console.log(result));

// Promise.allSettled([             //after running all the promises it returns with the status
//   Promise.resolve(10),
//   Promise.reject(20),
//   Promise.resolve(30),
// ])
// .then(result=>console.log(result));

// Promise.any([                    //gives the result of first successfull promise
//   Promise.reject(10),
//   Promise.reject(20),
//   Promise.resolve(30),
// ])
// .then(result=>console.log(result));

// Promise.race([                 //gives the result of which is completed first
//   new Promise(resolve=>setTimeout(()=>resolve("First"),1000)),
//   new Promise(resolve=>setTimeout(()=>resolve("Second"),2000)),
// ])
// .then(result=>console.log(result));

//promisification   - converting a callback based function into a promise based function
// function greet(name, callback){
//   callback("Hello " + name);
// }
// function greetPromise(name){
//   return new Promise((resolve, reject) => {
//     greet(name, function(res){
//       resolve(res);   
//     });
//   });
// }
// greetPromise("John and Jack")
//   .then(res => console.log(res));  

//Microtask - High priority runs immediately after sync code - .then(),.catch(),await
//Macrotask - Low priority -setInterval,setTimeout

//async function - always returns promise
async function greet(){
  return "greeting hello";
}
let x=greet();
console.log(x);

async function getdata(){
  return "hello parinitha";
}
getdata().then(resolve=>console.log(resolve));

//async and await
function fetchdata(){
  return new Promise(resolve=>{
    setTimeout(()=>resolve("Data received"),1000);
  });
}
async function showData(){
  let result=await fetchdata();
  console.log(result);
}
showData();

// async function fi(){
//     user=await fetch("/user");
//     data=await user.json();
// }  //multiple awaits runs step by step like normal code

//Module - 1 file
//main.js = 1 module,sayhi.js=1 module
//why modules - single file all content is difficult,so seperate modules
// advanced.js
// import {sayHellos} from './practice.js';
// let message=sayHellos("Parinitha");
// console.log(message);

//<script type="module" src="main.js"></script>//
// we should use type module if not import export does not work

//the varibale in one file is not directly visible to other file

/*let user="john";   --in practice.js
  console.log(user); --in advance.js not possible
*/

//sample files multiple times import aanalum 1 time thaa run aagum,stored in cache
// import "./test.js";
// import "./test.js";

//modules always use use strict

//Object - modules share data by reference
//export let admin={name:"John"};   --file1.js

//import {admin} from "./file1.js";  --file2.js
//admin.anme="Peter";

//import {admin} from "./file1.js";  --file3.js
//console.log(admin.name);







