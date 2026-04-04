"use strict";       //Follow strict rules
//Single line command
/*Multi line command*/
console.log("------Variable basics------");
let x=20;    //creating variable
console.log(x);
let y=30;
y=45;
console.log(y); //changing value of a variable
let apple=11;         //case sensitive treat this as different variables
console.log(apple);
let APPLE=12;
console.log(APPLE);   //symbols in variable name - _,$

/*DATATYPES*/
//PRIMITIVE DATATYPE   -- store single value
//1.Number
console.log("-----Datatypes-----");
let a=10;  //Integer
let b=2.5;  //Decimal
console.log(a+b);

//2.BigInt   -->greater than 2^53-1
let bigint=BigInt("12345676543");  //1st way to declare bigint  2nd-12345678n
console.log(bigint);

//3.String
let str1="Hello";
let str2='kaviya';

let num1=9;
let num2=9;
console.log(`Result is ${a+b}`);   //typeof - string

//4.Boolean
let res=5>2;
console.log(res);

//5.Null             -->Empty value given intentionally
let username=null;
console.log(username);

//6.Undefined        -->Value not assigned yet
let num;
console.log(num);

//7.Symbol           --> Create unique values
let id1=Symbol("id");
let id2=Symbol("id");
console.log(id1===id2);

//NON-PRIMITIVE DATATYPE  -->store multiple values
//8.Objects       
let student={
    id:1,
    username:"Karan",
    "Email id":"xyz@gmail.com"
}      
console.log(student.id);
console.log(student["Email id"]);
console.log(student);

//Interactions
//alert
//alert("Hello fill this form!!!");     //pop up appears if you click ok means only code runs
//prompt
//let uname=prompt("Enter your name",'Varshini');    //take user input  -if user types name it is returned ,if they click cancel returns null,it always return string,we can also give default value
//if we want to return as number  - let uname=Number(prompt("Enter your name"));
/*if(uname){
    console.log("Useful");
}
else{
    console.log("Not useful");
}
console.log(uname);
//confirm
let ques=confirm("Are you sure?");    //ask confirmation from user  -if user clicks ok true is returned ,if they click cancel returns false
console.log(ques);
*/
//Type conversion   - changing one datatype to another
//1.String(text)   - When something needs to be shown (display) → it becomes text
//alert(100);
console.log("-----Type conversions-----");
//2.Number(Math)  - everything becomes number
console.log("6"/"2");    //op:3
console.log("hello"/2);  //op:NaN

//3.Boolean  - false is for 0,"",null,undefined,Nan  ,for remaining all it is true
if(0){
    console.log("run");
} 
//debugger;
console.log("-----Operators-----");
//Operators - 5+2 (5,2)-operand,(+)-operator    
//1.Unary operator - works on one value
let n1=10;
n1=-n1;
console.log(n1);

//2.Binary operator - works on two values
let number1=10;
let number2=10;
console.log(number1+number2);

//Math operators +,-,*,/,%,**
console.log(1+2);
console.log(9-7);
console.log(4*4);
console.log(4/2);
console.log(5%2);
console.log(4**2);

//special case = + with strings
let string1="hello";
let string2="welcome";
console.log(string1+string2);//string and num concat

console.log(1+'2');
console.log(1+2+3+'5');
console.log(1+'2'+1);

//unary plus  - converts anything to number
console.log(+true);
console.log(+"");
console.log(+"5");
let one="5";
let two="6";
console.log(+one + +two);   //first converts then add it

//Assignment operator
let c=2;
//chaining assignment
let d,e,f,g;
d=e=f=g=4;
console.log(g);
//short operators
let n=10;
n+=20;
console.log(n);
//Increment and decrement
//Prefix
let i=10;
let j=++i;
console.log(j);
//Postfix
let k=10;
let l=k++;
console.log(l);
//comma operator
let id=(1+2,3+7);
console.log(id);
//Bitwise operator - works on binary 0 and 1
let bit1=5;
let bit2=3;
console.log(bit1&bit2);   //1
console.log(bit1|bit2);   //7
console.log(bit1^bit2);   //6
console.log(~bit1);  //~x=-(x+1)   //-6
console.log(bit1>>1); //5/2 if bit>>2 5/4
console.log(bit1<<2);
//comparison operators - <,>,<=,>=,==,!=,===,!== returns boolean
//string comparison
console.log("cat">"mat");  //false
console.log("Bee">"Be");    //true
console.log("a">"A");      //true

//Conditional branching
let age=38;
if(age>15 && age<18){
    console.log("Age is above 15 and below 18");
}
else if(age>18 && age<20){
    console.log("Age is between above 18 and below 20");
}
else{
    console.log("Age is more than 20");
}
//ternary operator
let vote=20;
let voteage=vote>18?"yes":"no";
console.log(voteage);

//Logical operators
let int1=10;
let int2=20;
let int3=0;
console.log(int1&&int2);
console.log(int1||int3);
console.log(!true);

//Nullish Coalescing ??
let in1;
console.log(in1??"Anonymous");  //if in1 is defined that value is printed
console.log(in1||"100");
//chaining
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

//Loops
//while
let int=0;
while(int<3){
    console.log(int);
    int++;
}
//do-while
let count=0;
do{
    console.log(count);
    count++;
}while(count<4);
//for loop
for(let counts=0;counts<4;counts++){
    if(counts==2) continue;
    console.log(counts);
}
//skip begin
let c1=2;
for(;c1<5;c1++){
    if(c1==4) break;
    console.log(c1);
}

//Infinite loop
/*for(;;){
    console.log("none");
}*/

for(let i=1;i<=10;i++){
    if(i%2==0) continue;
    if(i==9) break;
    console.log(i);
}

//switch
let a1=5;   
switch(a1){
    case 1:
        console.log("Prints 1");
        break;                         //without break it continues to next cases
    case 2:
        console.log("Prints 2");
        break;
    case 3:                             //Grouping
    case 5:
        console.log("Prints 3");
        break;
    default:
        console.log("Not found");
}
//Expression in switch
let a2="1";
let a3=0;
switch(+a2){
    case(a3+1):
        console.log("Match");
        break;
    default:
        console.log("No match");
}
//type
let a4="1";
let a5=0;
switch(a4){
    case(a5+1):
        console.log("Match");
        break;
    default:
        console.log("No match");
}

//console methods in JS
console.assert(5<10,"Wrong");

function f1(){
    f2();
}
function f2(){
    console.trace();
}
f1();

console.error("This is error message");
console.warn("Warning message");

let students=[
    {id:1,gender:"male",loc:"erode"},
    {id:2,gender:"female",loc:"chennai"},
];
console.table(students);

console.time("check");
for(let i=0;i<50;i++){
    console.log(i);
}
console.timeEnd("check");

console.info("Info about js");
console.count("check");

console.group("User details");
console.groupCollapsed("Hidden details");
console.log("Kaviya");
console.log("KTT");
console.groupEnd();
console.groupEnd();

console.log(console.memory);

console.log("-----Functions-----");
//function
function new1(){
    console.log("Print 2026");
}
new1();

new2("2026");
function new2(year="2025"){           //default value to a function
    console.log("Year is "+year);
}

//local and global variables
let fname="John";
function test(){
    let fname="kala";
    console.log(fname);
}
test();
console.log(fname);

//return
function add(a,b){
    return a+b;
}
let result=add(2,3);
console.log(result);

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
console.log(add(2, 3));       
console.log(sub(5, 2));  
console.log(mul(2, 3)); 
console.log(div(6, 3)); 

//function expression
let new3=function(){
    console.log("Function expression");
};
new3();

//using function as values
let new4=function(){
    console.log("a");
};
let new5=new4;
new5();

//Callback function                 //passing one func as argument to another function
function greeting(name,callback){
    console.log("Hello "+name);
    callback();
}
function bye(){
    console.log("Say bye");
}
greeting("Kalai",bye);

//Arrow function
let addition=(a,b)=>a+b;
console.log(addition(2,6));

let multi=n=>n*2
console.log(multi(5));

let welcome=()=>console.log("Hello");
welcome();

let multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(3,4));



//Objects and Data structures
let details={
    id:1,
    age:20,
    Pass:true,
    "Email id":"xyz@gmail.com"
};
//Accessing data
console.log(details.Pass);              //dot notation
console.log(details["Email id"]);       //square bracket notation - if key has space or special character

//add
details.name="Kalai";
console.log(details.name);
//update
details.age=25;
console.log(details.age);
//delete
delete details.Pass;
console.log(details);  

//object property access
let user={
    nickName:"Pari",
    age:20
};
let key="nickName";
console.log(user.key);
console.log(user[key]);

//Computed property
let fruit="apple";
let shop={
    [fruit]:5
};
console.log(shop.apple);  

//shorthand property
let idno=1;
let month="march";
let users={
    idno,
    month
};
console.log(users);

//property naming rules
let data={
    let:1,
    for:2,
    return:3,
    0:true
};
console.log(data);
console.log(data["0"]);
console.log(data[0]);

let news={
    data:undefined
};
console.log(news.data);
console.log("data" in news);


//sort
let obj = {
  2: "two",
  1: "one"
};
console.log(obj);

let obj1 = {
  "+2": "two",
  "+1": "one"
};
console.log(obj1);

//looping
let detail={
    id:1,
    age:20,
    Pass:true,
    "Email id":"xyz@gmail.com"
};
for(let key in detail){
    console.log(key,detail[key]);
}

//primitive copying
let m1=10;
let m2=m1;
m2=30;
console.log(m1+" "+m2);

//object copy
let newdata={
fname:"john"
};
let newdata1=newdata;
newdata1.fname="Kamal";
console.log(newdata);

let copy={...newdata};
copy.fname="Anu";
console.log(copy);
console.log(newdata);
console.log(newdata1);

//Comparison of objects
let cur={};
let next=cur;
console.log(cur===next);

let s1={};
let s2={};
console.log(s1===s2);

//const object
const use={
    fname:"kani"
};
use.fname="kalai";
console.log(use);

//cloning                   //let clone=use; this is copying reference
let clone={};
for(let key in use){  //nested
    clone[key]=use[key];
}
console.log(clone);

let clone1={...use};
console.log(clone1);

let clone2=Object.assign({},use,{location:"erode"});   //Object 
console.log(clone2);

let use1 = {
  name: "John",
  sizes: {
    height: 182
  }
};
let cloning = Object.assign({}, use1);
console.log(cloning);

let deepClone = structuredClone(use1);
console.log(use1.sizes === deepClone.sizes); 

let object = {
  name: "John",
  address: { city: "Chennai" }
};
let shallow = {...object};
let deep = structuredClone(object);  
shallow.address.city = "Erode";
deep.address.city = "Madurai";
console.log(object.address.city);   
console.log(shallow.address.city);
console.log(deep.address.city);  

console.log("------Methods------");
//methods
let met={
    id:2,
    age:34,
    hello:function(){
        console.log("Hello");
    }
};
met.hello();

let met1={
    id:2,
    age:34,
    hello(){
        console.log("Hello method 2");
    }
};
met1.hello();

let met2={
    gname:"kaviya",
    func1(){
        console.log(this.gname);
    }
};
met2.func1();

function sayHi() {
  console.log(this.name);
}
let user1 = { name: "John" };
let admin = { name: "Admin" };
user1.f = sayHi;
admin.f = sayHi;
user1.f();   // John
admin.f();  // Admin
console.log(user1);
console.log(admin);

//Constructor
function Use(name){
    this.name=name;
    this.admin=false;
    this.hello=function(){
        console.log("New text "+this.name);
    };
}
let users1 = new Use("John");
let users2 = new Use("Kaviya");
console.log(users1);
console.log(users2);
users1.hello();
users2.hello();

//optional chaining
let map={};
//console.log(map.area.street);   //cannot read properties of undefined error
console.log(map?.area?.street);

//Symbol type
let ids1=Symbol(id);
let ids2=Symbol(id);
console.log(ids1===ids2);

let idk=Symbol(id);
let object1={
    uname:"kamala",
    state:"kerala",
    [idk]:123
};
console.log(object1[idk]);
console.log(object1);

for(let key in object1){
    console.log(key);             
}

let object2=Object.assign({},object1);
console.log(object2);

let globalId1=Symbol.for("globalId1");
let globalId2=Symbol.for("globalId1");
console.log(globalId1===globalId2);

console.log(Symbol.keyFor(globalId1));

//Object to primitive conversion
let ob1={
    gname:"kala",
    toString(){
        return this.gname;   
    }
};
console.log(JSON.stringify(ob1));
console.log(ob1);
//alert(ob1);

let ob2={};
console.log(ob2+2);

let ob3={
    toString(){
        return "100";
    }
};
console.log({result: ob3+3, type: typeof ob3+3});

let ob4={
    toString(){
        return "100";
    }
};
console.log(ob4*3);

let ob5={
    toString(){
        return "50"
    }
};
let ob6={
    toString(){
        return "50"
    }
};
console.log(ob5+ob6);

let ob7={
    toString(){
        return "50"
    }
};
let ob8={
    toString(){
        return "50"
    }
};
console.log(ob5-ob6);

//Methods of primitives
let str="hello";
console.log(str.toUpperCase());


let m = 1.234;
console.log(m.toFixed(2)); // 1.23

let no=new Number(0);
if(no){
    console.log("Run this");
}
else{
    console.log("Skip this");
}

let no1=0;
if(no1){
    console.log("Run this");
}
else{
    console.log("Skip this");
}

let strnum="12345";
console.log(Number(strnum));

//console.log(null.test);             //cannot read properties of null -error
console.log("hello".toUpperCase());

console.log("-----Numbers-----");
//Numbers
let billion=1_000_000_000;
console.log(billion);

let bill=1e9;   //e
console.log(bill);
let bill1=3.7e9;
console.log(bill1);
let bill2=5.34e-2;
console.log(bill2);

let numb1=255;
console.log(numb1.toString(2));
console.log(numb1.toString(16));

console.log((123).toString(2));

//Rounding
console.log(Math.floor(3.9)); // 3
console.log(Math.ceil(3.1));  // 4
console.log(Math.round(3.5)); // 4
console.log(Math.trunc(3.9)); // 3
console.log(Math.floor(-3.9)); //-4

let numb2 = 12.3467890;
console.log(numb2.toFixed(3)); // 12.347

console.log(isNaN("abc"));                     //convert to num and check NaN
console.log(isNaN("123"));                      
console.log(Number.isNaN("123"));              //strict check for NaN
console.log(Number.isNaN(NaN));

console.log(isFinite("abc"));    
console.log(Number.isFinite("abc"));                
console.log(Number.isFinite("123")); 
console.log(isFinite("123")); 

console.log(Object.is(0, -0));
console.log(Object.is(NaN, NaN));

//Parse
console.log(parseInt("120px"));
console.log(parseFloat("12.3.4"));
console.log(parseFloat("ab45.4"));

console.log(Math.random());
console.log(Math.max(3,4,5));
console.log(Math.min(3,4,5));
console.log(Math.pow(3,3));

console.log("-----String-----");
//String
let hello=`Hello
world`;
console.log(hello);

console.log("Hello\nworld");
console.log("Name:\t Kala");
console.log('It\'s a toy');
console.log("C\\Data\\Program files"); //
0
let world="hello";
console.log(world.length);
let world1="My\n";
console.log(world1.length);

//string character access
console.log(world[1]);
console.log(world1.at(-1));

for(let ch of world){
    console.log(ch);
}

//Immutable
/*let st="hi";
st[0]="m";
console.log(st);*/
let st1="Hello"
st1="hello "+st1[0];
console.log(st1);

//case change
console.log(st1.toUpperCase());
console.log(st1.toLowerCase());

//indexOf
let st2="Tamil is a language";
console.log(st2.indexOf("is"));

console.log(st2.indexOf("Tamilas"));

if(st2.indexOf("Tamil")){
    console.log("Found the word");
}
if(st2.indexOf("Tamil")!=-1){
    console.log("Found");
}

//includes
console.log(st2.includes("language"));
//startsWith and endsWith
console.log(st2.startsWith("Fam"));
console.log(st2.endsWith("age"));

//Substring methods
let substr=" International,national ";
//slice
console.log(substr.slice(0,4));    //start and end exclude index 5
//
console.log(substr.slice(2));
console.log(substr.slice(-4));
//substring
console.log(substr.substring(0,5));    //start and end exclude index 5
//substr
console.log(substr.substr(1,6));     //start and length

console.log('A'<'Z');
console.log(substr.replace("al","ally"));  //       //changes only 1st occurance
console.log(substr.replaceAll("al","ally"));     //replaces all
console.log(substr.trim());
console.log(substr.split(","));
console.log(substr.search("ter"));
console.log(substr.charCodeAt(1));
console.log(substr.codePointAt(2));
console.log("helloooo ".repeat(4));
console.log(substr.padStart(30,"*"));
console.log(substr.padEnd(30,"#"));
console.log(String.raw`Hello\nWorld`);                 // "Hello\nWorld"-no new line

console.log("-----Array-----");
//Array
let fruits=["Apple","Banana","Grapes","orange"];
console.log(fruits);
console.log(fruits[1]);     //access array element
console.log(fruits[1]="mango");  //replace
console.log(fruits);
console.log(fruits[4]="peer");   //add
console.log(fruits);            
console.log(fruits[fruits.length-1]);     //last element
console.log(fruits.at(-1));       //last element
console.log(fruits.length);      //total no of items

let arr=new Array(1,2,3);
arr.push(6);
console.log(arr);
arr.pop();     
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(5);
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(let item of arr){
    console.log(item);
}

let arr1=new Array(3);
console.log(arr1);
console.log(arr1.length=0);
console.log(arr1);

let arr2=["Apple",12,{address:"Erode"},true];
console.log(arr2);

let matrix=[
    [1,2,3],
    [4,5,6]
];
console.log(matrix[1][1]);

let marr=[1,2,3];
console.log(marr.toString());
console.log("-----------------");

//Array methods
let color=["red","black","green"];
console.log(color[0]);

color.push("purple");
console.log(color);
color.pop();
console.log(color);
color.shift();
console.log(color);
color.unshift("Grey");
console.log(color);

//indexof
color.push("black");
console.log(color);
console.log(color.indexOf("black"));                 //first occurrence 
console.log(color.lastIndexOf("black"));             //Last occurrence

//Immutable change
let col=color.with(1,"peach");                       //original array does not change
console.log(color);
console.log(col);

//looping
for(let i of color){
    console.log(i);                  //values only
}
color.forEach((item,index)=>console.log(item,index));           //with index

let map1=[1,2,3,4];
let d1=map1.map(n=>n*2);              //modify all array elements
console.log(map1);
console.log(d1);
let d2=map1.filter(n=>n%2===0);       //select some elements based on the condition
console.log(d2);
console.log(map1);

//check values
console.log(color.includes("Grey"));   //true
console.log(color.length);             //length of array

console.log(map1.find(n=>n>3));        //first match 
console.log(map1);        
console.log(map1.some(n=>n>2));        //if atleast one it returns true
console.log(map1.every(n=>n>0));       //all match true
console.log(map1.every(n=>n%2===0));

console.log(map1.concat(color));
console.log(map1.slice(1,3));         //start and end exclude end index
let map2=[6,7,8,9];
let new9=(map2.splice(0,2));          //start from 0th index and delete two elements it changes original array
console.log(new9);
console.log(map2);

let o1=[7,3,8,9,4,6,1,2];
console.log(o1.toSorted());              //.sort() and .reverse use pana original arrray layum change aagum
console.log(o1.toReversed());
console.log(o1);

let ar1=[1,2,3,4];
let additive=ar1.reduce((acc,curr)=>acc+curr,0);
console.log(additive); 

let ar2 = [[1,2],[3,4],[5]];    //flatMap
let flat = ar2.reduce((a, c) => a.concat(c), []);  
console.log(flat);                   // [1,2,3,4,5]

let ar3=["kavya","kamal","kalai"];
console.log(ar3.join(";"));
console.log("------------------------");

//Iterable
for(let i of ar3){
    console.log(i);
}
for(let i of "hello"){
    console.log(i);
}

let objects1 = {
  [Symbol.iterator]() {
    let arr6=[1,2,3,4];
    let i = 0;
    return {
      next() {
        if (i<arr6.length) {
          return { value: arr6[i++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};
for (let x of objects1){
    console.log(x);
};

console.log("-----Map-----");
//Map 
let mapping=new Map();
mapping.set("John",90);
mapping.set("Jack",56);
console.log(mapping.get("John"));
console.log(mapping);                   //also it shows no of entries

let obj9={
    1:"hello",
    "1":"hi"
};
console.log(obj9);   //objects keys are converted to string and overwrites previous value

let maps1=new Map();
maps1.set(1,"hello");
maps1.set("1","hii");
console.log(maps1.get(1));
console.log(maps1.get("1"));

let uses1 = {name:"john"};
let map3 = new Map();
map3.set(uses1, 100);
console.log(map3.get(uses1));           
console.log(map3.get(uses1.name));        //map searches for the exact key here it searches for "john" string but it stored the entire object

//chaining
map3.set("Kala",1)
    .set("Kamala",2)
    .set("Kavya",3);
console.log(map3);

//copy one map to another
let mapping1=new Map([...map3]);
console.log(mapping1);

let mapping2=new Map();
for(let[key,value] of map3){
  mapping2.set(key,value);
}
console.log(mapping2);

let map4=new Map([
    ["apple",23],
    ["banana",34]
]);
for(let [key,value] of map4){
    console.log(key,value);
}
console.log(map4.has("apple"));
console.log(map4.delete("apple"));
console.log(map4);
console.log(map4.size);
console.log(map4.clear());
console.log(map4);

//Object to map
let obje1={
    name:"kalai",
    "age":34
};
let map5=new Map(Object.entries(obje1));   //object entries return value?,empty array 
console.log(map5);

//Map to object
console.log(Object.fromEntries(map5));

console.log("-----Set-----");
//Set
let set=new Set();      //remove duplicates
set.add("John");
set.add("Jack");
set.add("John");
console.log(set);

console.log(set.has("Jack"));
console.log(set.delete("John"));
console.log(set);
console.log(set.size);
set.add("Mary");
set.add("Kayal");
console.log(set);

for(let i of set){
    console.log(i);
}

//remove duplicates
let array=[1,2,3,1,2];
let uni=new Set(array);
console.log(uni);
console.log(Array.from(uni));           //convert set to array

//numbers in set
let set1=new Set();
set1.add(1);
set1.add(1);
console.log(set1.size);

//objects in set
let set2=new Set();
let oj1={name:"kala",id:90};
let oj2={name:"kala",id:90};
set2.add(oj1);
set2.add(oj2);
console.log(set2.size);

console.log("-----GC-----");
//Garbage collection
let johny = {name:"John"};
johny = null;
console.log(johny);               //no reference removed from memory

//array-object
let jack={id:1,state:"kerala"};
let arrays1=[jack];              //reference of the object is in 0th index
jack=null;
console.log(jack);
console.log(arrays1);

//map-object
let objec1={state:"kerala"};
let rmap=new Map();
rmap.set(objec1,"data");           //map has the reference for the object so GC la object delete aagathu
objec1=null; 
console.log(objec1);
console.log(rmap);


//weak map
let o2={};
let wmap=new WeakMap();
wmap.set({},"data");
console.log(wmap);
//wmap.set(12);
//console.log(wmap);                //Invalid value used by weakmap key
wmap.set(o2,"data");
console.log(wmap);

//weakmap-object
let objec2={state:"kerala"};
let wm=new WeakMap();
wm.set(objec2,"data");           
objec2=null;                        //weak link so object is deleted by GC
console.log(objec2);
console.log(wm);

//weakset
let ws = new WeakSet();
let user8 = {name:"John"};
ws.add(user8);
console.log(ws.has(user8)); // true
user8 = null;
console.log(ws.has(user8));
console.log("--------------------------------");

//Object.keys / values / entries
let obje2={
    username:"kavitha",
    age:30
};
console.log(Object.keys(obje2));
console.log(Object.values(obje2));
console.log(Object.entries(obje2));

for(let val of Object.keys(obje2)){
    console.log(val);
}
for (let [key, value] of Object.entries(obje2)) {
    console.log(key, value);
}
console.log(Object.keys(obje2).length);

console.log("-----Destructing assignment-----");
//Destructing Assignment
let [usname,newage]=["kavitha",34];
console.log(usname,newage);

let [usname1,,state]=["kamala","yes","kerala"];
console.log(usname1,state);

let[a6,a7,...rest]=[1,2,3,4];
console.log(a6);
console.log(a7);
console.log(rest);

let x2 = 10;
let y2 = 20;
[x2, y2] = [y2, x2];
console.log(x2);
console.log(y2);

let [x3="Guest",y3="Jack"]=["John"];
console.log(x3);
console.log(y3);

let users3 = {
  uname: "John",
  uage: 30
};
let {uname,uage} = users3;
console.log(uname,uage);

let{naming:new6}={naming:"Jack"};
console.log(new6);

let {x4=100}={};
console.log(x4);

let {a8,...rest1}={a8:1,a9:2,a10:3};
console.log(a8,rest1);

console.log("-----Date and time-----");
//Date and time
let time=new Date();                 //current date and time
console.log(time);
console.log(time.getTime());

let t=new Date(0);
console.log(t);

let t1=new Date(1000);
console.log(t1);

let t2=new Date(-1000);
console.log(t2);

let t3 = new Date("2020-05-10");
console.log(t3);

let t4=new Date(2026,3,3,12,30,0);
console.log(t4);

console.log(time.getFullYear());
console.log(time.getMonth());
console.log(time.getDate());
console.log(time.getDay());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getUTCFullYear());
console.log(time.getUTCHours());
console.log(time.toISOString());
console.log(time.toString());
console.log(time.setFullYear(2027));
console.log(time.setMonth(8));

let d3= new Date(2020,1,31);
console.log(d3);

let d4=new Date(2026,3,3);
let d5=new Date(2026,3,4);
console.log(d5-d4);

let ms = Date.parse("2020-01-01");
console.log(ms);






