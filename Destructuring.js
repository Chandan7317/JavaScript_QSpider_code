
//! Example 1
// let arr=[10,20,30,40,[100,200,300]];
// console.log(arr[4][2]);//300
// console.log(arr[0]);//10

//! Example 2

    // let arr2=[100,200,3000,[10,40,["hello",["HelloWorld"]]]]
    // let x=arr2[3][2][1][0];//HelloWorld
    // console.log(x);


// ? Example 1
 //!Array destucturing
// let arr3=[10,20,30,40]
// let [a,b,c,d]=arr 
// console.log(a,b,c,d);
// ? Example 2


// let arr4=[10,210,30,["hii,570"]]
// let [q,w,e,[z,y]]=arr4
// console.log(z);

// Example 1

// let arr5=["raj",1,["wipro",["developer"],5000],"abc"]

// let [a, , [, [d],e], ]=arr5 //raj dev 5t
// console.log(a,d,e);



// ! Skipping Values

// Example 1

// let arr6=[10,20,30,50]
// let [x, ,y]=arr6
// console.log(x,y); 

// Example 1

// let arr8=[10,["hello",60,["hii",[700,590,["byee"]]]]]
// let [,[q,,[w,[,,[h]]]]]=arr8
// console.log(q,w,h); // he hii by



// ! Object Destructing
//? Example 1

// let obj={
//     id:1,
//     title:"Leptop",
//     brand:"HP",
//     Price:7000,
// };
// let {title}=obj;
// console.log(title);

//? Example 2
// let obj={
//     id:1,
//     title:"Leptop",
//     Price:109.95,
//     category:"Electronics",
//     rating:{
//         rate:3.9,
//         count:120,
//     }
// };

// let {title,category,rating:{count,rate}}=obj;
// console.log(title); //lep
// console.log(category); //el
// console.log(count);//120

//? Example 3

let obj={
    id:2,
    ename:"raj",
    hobbies:["Cricket","footbal"],

    skill:{
        frontend:["Html","Css","JAvascript","React"],
        backend:["node","java","sql","mongo","express"],
    },
};

let  {ename,hobbies:[,x],skill:{frontend:[,,,y],backend:[,z]}}=obj
console.log(ename,x,y,z); //foo react java

//? Example 3

function test({id,ename}){
    console.log(id,ename);
}
test({id:1,ename:"raj"},100)
