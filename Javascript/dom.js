let heading=document.querySelector("h1");    //h1-tag
heading.textContent="Document object model";    //innertext,innerHtml

let ul=document.querySelector("ul");   //ul-id
ul.children
ul.parentElement
ul.firstElementChild.nextElementSibling

let li=document.createElement("li");
li.textContent="Item 3";
ul.appendChild(li);
ul.firstElementChild.remove();

// let btn=document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     alert("Button clicked");
// })

let title2=document.getElementById("title");
title2.textContent="DOM";
title2.style.color="brown";
document.body.style.backgroundColor="lightblue";

let lis=document.createElement("li");
lis.textContent="Item 1";
ul.prepend(lis);

let tit=document.getElementById("title");
setTimeout(()=>{
    tit.textContent="NEW DOM";
},2000);
setTimeout(()=>{
    tit.remove();
},4000);

let title1=document.getElementById("title1");
//add new attribute
title1.setAttribute("title","this is heading");

//attribute valu
title1.getAttribute("title");

//remove attribute
// title1.removeAttribute("title","this is heading");

// window.innerWidth;           check screen size

//list create and user interaction
btn.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.textContent="new item";
    li.addEventListener("click",()=>{
        li.style.textDecoration="line-through";
    });
     li.addEventListener("dblclick", () => {
        li.remove();
    });
     li.addEventListener("mouseover",()=>{
        li.style.backgroundColor="yellow";
    });
    li.addEventListener("mouseout",()=>{
        li.style.backgroundColor="white";
    });
    ul.appendChild(li);
});

//1.Create an element
let div=document.createElement("div");
div.textContent="HELLO";
document.body.append(div);

//2.Insertion methods
let el=document.getElementById("title1");
let p1=document.createElement("p");
p1.textContent = "before heading";
let p2=document.createElement("p");
p2.textContent = "after heading";
el.before(p1);
el.after(p2); 

//3.Clone node
let copy=title1.cloneNode();                //copy element
copy
let tcopy = title1.cloneNode(true);         //copy full content
tcopy

//4.DocumentFragment
let fragment=document.createDocumentFragment();
for(let i=0;i<5;i++){
    let li=document.createElement("li");
    li.textContent=i;
    fragment.appendChild(li);
}
document.body.append(fragment);

//5.adjacent
ul.insertAdjacentHTML("beforeend", "<li>New</li>");
ul.insertAdjacentText("afterbegin","some text");
ul.insertAdjacentElement("beforebegin",li);

let els = document.getElementById("title");
els.classList.add("active");
els.classList.remove("active");
els.classList.toggle("active");