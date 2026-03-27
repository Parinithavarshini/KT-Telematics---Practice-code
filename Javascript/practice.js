"use strict";       //Forces to enter coorect code
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
let bigint=BigInt("12345676543");  //1st way ti declare bigint  2nd-12345678n
console.log(typeof bigint);

//3.String
let str1="Hello";
let str2='kaviya';

let num1=9;
let num2=9;
console.log(`Result is ${a+b}`);   //Backticks

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
let ques=confirm("Are you sure?");    //ask confirmation from user  -if user clicks ok tru is returned ,if they click cancel returns false
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
console.log(bit1&bit2);
console.log(bit1|bit2);
console.log(bit1^bit2);
console.log(~bit1);  //~x=-(x+1)
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













