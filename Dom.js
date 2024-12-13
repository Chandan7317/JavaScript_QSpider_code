
// ! Dom Selectors
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// !document.getElementById()
let head=document.getElementById("head")
console.log(head);
console.log(head.textContent);

//! document.getElementsByClassName()
// It is uesd to target multiple element and return the htmlCollection

let section=document.getElementsByClassName("container")
console.log(section);
console.log(section[2]);
console.log(section[0]);
console.log(section[1]);

// ? textContent
console.log(section[0].textContent);
console.log(section[1].textContent);
console.log(section[2].textContent);


// ! Checks array is pure or not and returns boolean value
console.log(Array.isArray(section));//false


// ! convert impure  array to pure and return it
let pureArr=Array.from(section)
console.log(pureArr);
console.log(Array.isArray(pureArr));//true


//! document.getElementsByTagName()
// tagname and Classname is same one diff 


// let section=document.getElementsByTagName("section")
// console.log(section);
// console.log(section[0].textContent);


//! document.querySelector()
// let head=document.querySelector("#head")
// console.log(head);

// let container=document.querySelector(".container")
// console.log(container);

// let element=document.querySelector("p,#head,.container")//Priorty first
// console.log(element);


//! document.querySelectorAll()
//todo-> Nodelist[] and HtmlCollaction[]  both are impure array but the different is in nodelist we can can use only 1 array method i.e, foreach() but in htmlcollection we cannot use any of the array method

let container=document.querySelectorAll("section")
console.log(container);//NodeList(3) [section.container, section.container, section.container]
console.log(Array.isArray(container));//false


// container.forEach((x)=>{
//     console.log(x.textContent);
    
// })

