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
let set1=setTimeout(()=>{
  console.log("Helloooo");
},10000);
//clearTimeout(set1);

//setInterval
// let set2=setInterval(()=>{
//   console.log("After 5 sec");
// },5000);
// clearInterval(set2);

function pow(a,b){
  console.log(Math.pow(a,b));
}
setTimeout(pow,1000,2,3);

console.log("Start");
setTimeout(()=>{
  console.log("Middle");
},3000);
console.log("End");

let counted=0;
setTimeout(function run(){
  console.log("Print fastly");
  counted++;
  if(counted<3){
    setTimeout(run,2000);
  }
},4000);

setTimeout(()=>{
  console.log("World");
},0);
console.log("Hello");

//Decorator  - doubt
// function greet(name){
//   return "Hello "+name;
// }
// function deco(func){
//   return function(name){
//     console.log("Before");
//     let res=func(name);
//     console.log("After");
//     return res;
//   };
// }
// greet=deco(greet);
// console.log(greet("John"));

//Function binding
let objfunc={ 
  name:"kalai",
  age:34,
  hello(){
    console.log(this.name);
  }
};
setTimeout(objfunc.hello,1000);      //reference


let objfunc1={ 
  name:"kalai",
  age:34,
  hello(){
    console.log(this.name);
  }
};
setTimeout(()=>(objfunc1.hello()),1000);

let news1=objfunc1.hello.bind(objfunc1);
setTimeout(news1,12000);

function binding(msg,name){
  console.log(msg+" "+name);
}
let newbind=binding.bind(null,"hello");  //call,apply
newbind("john");

let obj8={
  name:"Kamalaa",
  show(){
    setTimeout(()=>{
      console.log(this.name);
    },1000);
  }
};
obj8.show();


