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
console.log(APPLE);

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
console.log(`Result is ${a+b}`);   

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
alert("Hello fill this form!!!");     //pop up appears if you click ok means only code runs
//prompt
let uname=prompt("Enter your name",'Varshini');    //take user input  -if user types name it is returned ,if they click cancel returns null,it always return string,we can also give default value
//if we want to return as number  - let uname=Number(prompt("Enter your name"));
if(uname){
    console.log("Useful");
}
else{
    console.log("Not useful");
}
console.log(uname);
//confirm
let ques=confirm("Are you sure?");    //ask confirmation from user  -if user clicks ok true is returned ,if they click cancel returns false
console.log(ques);

//Type conversion   - changing one datatype to another
//1.String(text)   - When something needs to be shown (display) → it becomes text
alert(100);

//2.Number(Math)  - everything becomes number
console.log("6"/"2");    //op:3
console.log("hello"/2);  //op:NaN

//3.Boolean  - false is for 0," ",null,undefined,Nan  ,for remaining all it is true
if(0){
    console.log("run");
}
debugger;
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
console.log(string1+string2);

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

console.dir(document);
console.dirxml(document.body);
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














