//! Object Litrals 
// let user1={
//     id:1,
//     name:"Raj",
//     company:"TCS",
//     Salary:"50000",
//     Phone:19384575757,
//     Addhar:395858949450,
// };
// console.log(user1);
// !Read
// console.log(user1.name);
// console.log(user1.Addhar);

// //! Update
// user1.Salary=590000;
// console.log(user1);


// console.log(user1.pancard);//! Undefined

// !Adding New key
// user1.car="Nano"
// console.log(user1);

// !Delete
// delete user1.Addhar
// console.log(user1);


// !Object Constuctor
// let obj=new Object()
// obj.name="Chandan";
// console.log(obj);

// !Object Method

let user2={
    id:1,
    title:"asus",
    price:5000,
    colar:"Black",
}
// console.log(user2);


// !Object.Keys()
console.log(Object.keys(user2));
// !Object.values()
console.log(Object.values(user2));

 // ! Object.entries()
let x=Object.entries(user2);
console.log(x);
//  !Object.fromEntries() It is ruturn object form;
let y=Object.fromEntries(x);
console.log(y);


// Object Itrate Rule 
// ! For in 
//! for of

// ! For in 



let arr=[10,20,30,40,50]
//! for in, means It return Index value
for(let i in arr){
    console.log(i);
}

//! for of ,means It return value
for(let i of arr){
    console.log(i);   
}
// ! only possible way to itrate on Object
let user3 = {
    id:1,
    title:"asus",
    price:5000,
    colar:"Black",
}

for(let i in user3){
    console.log(user3[i]);
    console.log(i);
    
    
}


// ! If you want to make variable is value as a key of an object then use  [] to access that variable inside Object

// let x="colar";
// let product={
//     id:"1",
//     title:"Car",
//     price:9000000,
//     [x]:"black"
// }
// console.log(product);
