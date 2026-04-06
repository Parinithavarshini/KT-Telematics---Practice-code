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


