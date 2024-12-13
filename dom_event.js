//! DOM EVENTS

//! onclick
function clickfun(){
    console.log("single click");
    
}

//! ondblclick

function clickdbl(){
    console.log("double clicked");
    
}
//! onmouseenter
function enter(){
    console.log("mouse entered");
    
}
//! onmouseleave
function leave(){
    console.log("mouse left");
    
}
//! onmousemove
function move(){
    console.log("mouse moved");
    
}
// !onkeydown
function down(){
    console.log("key pressed");
    
}
//! onkeyup
function up(){
    console.log("key released");
    
}
// !onchange
function change(){
    console.log("Changed");
    
}
//! onsubmit
function formData(pre){
    pre.preventDefault()
    console.log(pre);
    let email=document.querySelector("#email")
    let password=document.querySelector("#password")

    // ? Value Get
    console.log(email.value);
    console.log(password.value);

    // ? Object From
    console.log({email:email.value,password:password.value,});
    
    email.value=""
    password.value=""
}
//! onload
function webpageLoad(){
    console.log("Webpage Load");
    
}


//! onscroll
function paraScrool(){
    console.log("Paragrapgh Scrolled");
    
}
