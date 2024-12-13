// ! Example 1
let btn = document.querySelector("button")
let h1 = document.querySelector("h1")
btn.addEventListener("click", () => {
  console.log("btn Clicked");
  h1.style.backgroundColor = "red"
  h1.style.color = "white"

})
// ! Example 2

let divs = document.querySelectorAll("div")
divs.forEach((ele) => {
  ele.addEventListener("mousemove", () => {
    ele.style.background = ele.textContent;

    ele.addEventListener("mouseleave", () => {
      ele.style.background = "white";
    })

  })
  
})

// ! Example 2  Event Propagation

let main = document.querySelector("main")
let section = document.querySelector("section")
let article = document.querySelector("article")

main.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("main");

  main.style.backgroundColor = "red";
}, 0)// use capturing 

section.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("section");
  section.style.backgroundColor = "yellow";
}, 0)// use capturing 

article.addEventListener("click", (e) => {
  e.stopImmediatePropagation();//If you have multiple functions listening for a click on a button, and you want to stop the other functions from running when one function is triggered, you use stopImmediatePropagation.


  // stopImmediatePropagation is a method in JavaScript that stops an event from being passed to other event listeners on the same element or parent elements.

  console.log("article");
  article.style.backgroundColor = "green";
}, 0)// use capturing 

article.addEventListener("click", (e) => {
  console.log("article 2");
  article.style.backgroundColor = "green";
}, 0)// use capturing 
