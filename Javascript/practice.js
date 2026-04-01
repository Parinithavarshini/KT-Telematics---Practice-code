"use strict";       //Forces to enter correct code
//Single line command
/*Multi line command*/
let x=20;    //creating variable
console.log(x);
let y=30;
y=45;
console.log(y); //changing value of a variable
let apple=11;         //case sensitive treat this as different variables
console.log(apple);
let APPLE=12;
console.log(APPLE);   //symbols in variable name

/*DATATYPES*/
//PRIMITIVE DATATYPE   -- store single value
//1.Number
let a=10;  //Integer
let b=2.5;  //Decimal
console.log(a+b);

//2.BigInt   -->greater than 2^53-1
let bigint=BigInt("12345676543");  //1st way to declare bigint  2nd-12345678n
console.log(typeof bigint);

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

//2.Number(Math)  - everything becomes number
console.log("6"/"2");    //op:3
console.log("hello"/2);  //op:NaN

//3.Boolean  - false is for 0," ",null,undefined,Nan  ,for remaining all it is true
if(0){
    console.log("run");
} 
//debugger;
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
let voteage=age>18?"yes":"no";
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

let c2=5;
for(;c2<8;){
    console.log(c2++);
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

//console.dir(document);
//console.dirxml(document.body);
console.log(console.memory);

//function
function new1(){
    console.log("Print 2026");
}
new1();

new2("2026");
function new2(year="2025"){           //default value to a function
    console.log("Year is "+year);
}

x=30;
y=60;
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

//Callback function
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
console.log(details);  //delete keyword ,without delete keyword

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
let deep = structuredClone(object);  //available browser or node
shallow.address.city = "Erode";
deep.address.city = "Madurai";
console.log(object.address.city);   
console.log(shallow.address.city);
console.log(deep.address.city);  


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
console.log(ob3+3);

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

//Numbers
let billion=1_000_000_000;
console.log(billion);

let bill=1e9;
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

//String
let hello=`Hello
world`;
console.log(hello);

console.log("Hello\nworld");
console.log("Name:\t Kala");
console.log('It\'s a toy');
console.log("C\\Data\\Program files");

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
console.log(substr.slice(2));
console.log(substr.slice(-4));
//substring
console.log(substr.substring(0,5));    //start and end exclude index 5
//substr
console.log(substr.substr(1,6));     //start and length

console.log('A'<'Z');
console.log(substr.replace("al","ally"));        //changes only 1st occurance
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

let arr2=["Apple",12,{address:"Erode"},true,function(){console.log("array")}];
console.log(arr2);

let matrix=[
    [1,2,3],
    [4,5,6]
];
console.log(matrix[1][1]);

let marr=[1,2,3];
console.log(marr.toString());


