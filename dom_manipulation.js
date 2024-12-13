// ! Example 1
//! createElement 
let h1=document.createElement("h1")
h1.textContent="Hello World"
h1.innerHTML="<mark> Hello World</mark>"

console.log(h1);

document.body.appendChild(h1)


// ! Example 2
let data=[10,20]
data.map(()=>{
    // createElement
let div=document.createElement("div")
let img=document.createElement("img")
let h1=document.createElement("h1")
let btn=document.createElement("button")

//Adding  textContent
h1.textContent="Jhon";
btn.textContent="view more"

//setting Attribute 
div.setAttribute("id","card")
img.setAttribute("src","fakepath")

//appending to an element as child 
div.append(img,h1,btn)

// appending to body
document.body.append(div)
})

