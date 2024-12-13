

// ! String 
// There are three way to write

// let str1='Hello World'
// let str2="Hello Unverse"
// let str3=`Hello Galaxy`  //Backticks,You can write multiline String

// console.log(str1+""+str2+""+str3);
// console.log(`${str1}${str2}${str3}`);//String Interpolation 4{Variable_name }


// !
// let str="Hello World";
// console.log(str.length);//Property It return no of Chars
// console.log(str[0]);
// console.log(str[6]);


// !   String method 

//! slice()
// let str1="JavaScript"
// console.log(str1.slice(0,4));//Using Pasitive Index
// console.log(str1.slice(-10,-6)); // Using Negative Index

// console.log(str1);

//! substring 
// let str1="JavaScript"
// console.log(str1.substring(0,4));//Using Pasitive Index
// console.log(str1.substring(-10,-6));//!Negative Index not Possible



// ! Substr(Start index,Length)
let str1="JavaScript"
// console.log(str1.substr(4,6));
// console.log(str1.substr(0,4));


// ! replace()
let str2="Hi Everyone, Hi to Javascript"
console.log(str2.replace("Hi","Welcome"));
// ! replaceAll()
// console.log(str2.replaceAll("Hi","Welcome"));

// !trim()

// let str3="      React       ";
// console.log(str3.trimStart());//Remove White Space From Starting
// console.log(str3.trimEnd()); //Remove White Space From Ending
// console.log(str3.trim());//Remove White Space From start and End 

// !toUpperCase
// let str4="web devlopment"
// console.log(str4.toUpperCase());
//! toLowerCase
// console.log(str4.toLowerCase());

// !charCodeAt  
// ?return ASCII CODE  
let str5="MangoDB"
console.log(str5.charCodeAt(1));//77  
//! Return Character
console.log(str5.charAt(0));//M


// !split
// ?It Convert TO Array
let str6 ="Welcome"
console.log(str6.split()); //['Welcome']
console.log(str6.split("")); //(7) ['W', 'e', 'l', 'c', 'o', 'm', 'e']
console.log(str6.split("e")); //(2) ['We', 'come']



// let data="nitin"
// let val=data.split("")
// let reverse=val.reverse()
// let result=reverse.join("")

//Chaining Method
// let result1= data.split("").reverse().join("")

// if(data == result){
//     console.log("Plaindrone");
    
// }
// else{
//     console.log(" Not Plaindrone");

// }


