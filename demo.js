// ! Promise Way 1
// let obj=[{
//     id:1,
//     ename:"Chandan kumar",
//     cname:"TCS",
//     salary:20000,
//     mob:8739293923,
// }]


// let arror="Not Found Api"

// let p1=new Promise((response,reject)=>{

// if(10>2){
//     response(obj)
// }
// else{
//     reject(arror)
// }

// })
// console.log(p1);

// p1.then(()=>{
//     console.log("I am then");

// })


// p1.catch(()=>{
//     console.log("I am Catch");

// })

// ! Promise Way 2

// let p1 = fetch("https://fakestoreapi.com/products")
// console.log(p1);

// p1.then((response) => {
//     console.log(response);

//     let p2=response.json()
//     console.log(p2);

//     p2.then((x)=>{
//         console.log(x);

//     })
//     p2.catch((er)=>{
//         console.log("Invali",e);

//     })

// })

// p1.catch((error) => {
//     console.log("Some thing is Rong");

// })



// Promise way 3 

// async function users(){
//   try {
//     let resp= await fetch("https://api.github.com/users") 
//     console.log(resp);
//     let p2=await resp.json()
//     console.log(p2);
//     displayUser(p2)

//   } catch (error) {
//     console.log(error);

//   } 

// }
// users()


// function displayUser(userUi){
// // console.log(userUi);

// userUi.map((p2)=>{
//     console.log(p2);
//     let {login,avatar_url}=p2
//     document.write(`<h1>${login}</h1> <img src='${avatar_url}'/>`)
// })
// }

// function displayUser(userUi){
//     // console.log(userUi);

//     userUi.map(({login,avatar_url})=>{

//         document.write(`<h1>${login}</h1> <img src='${avatar_url}'/>`)
//     })
//     }










// async function fetchUser(){
// try {
//   let p1=await fetch("https://api.github.com/users")
//   console.log(p1);
//   let p2=await p1.json()
//   console.log(p2);
//   displayUser(p2)

// } catch (error) {
//   console.log(error);

// } 
// }
// fetchUser()



// function displayUser(alluser){
//   // console.log(alluser);

//   alluser.map((p2)=>{
//     let {id,received_events_url,login,avatar_url}=p2
//     document.write(`<h1>${id}</h1><h1>${login}</h1>
//       <img src="${avatar_url}"/>`)
//   })


// }


// !Way 1
// let data=[{
// ename:"Chandan",
// id:1,
// salary:20000,
// companyName:"Tcs",

// }];

// let err={
//   message:"SomeThing is Rong",
// }



// let p1=new Promise((resolve,reject)=>{
// if(10>2){
// resolve(data)
// }else{
// reject(err)
// }

// })
// console.log(p1);


// p1.then((res)=>{
//   console.log("I am then ",res);

// })

// p1.catch((err)=>{
//   console.log("I am Catch",err);

// })

// p1.finally(()=>{
//   console.log(" I am Finally");

// })

//  ! Way 2

// let p1=fetch("https://fakestoreapi.com/products")
// console.log(p1);

//  p1.then((resolve)=>{
// console.log(resolve);

// let p2=resolve.json()
// console.log(p2);


// p2.then((res)=>{
//   console.log(res);

// })

// p2.catch((err)=>{
//   console.log("Something is Rong",err);

// })

// })

// p1.catch(()=>{
//   console.log("Some thing Is Rong");

// })




async function displayUser() {
try {
  let p1 = await fetch("https://api.github.com/users")
  console.log(p1);

  let p2=await p1.json()
  console.log(p2);
  displayData(p2)

} 
catch (error) {
  console.log(error);
  
}
 
}
displayUser()


function displayData(alluser){
console.log(alluser);

alluser.map((p2)=>{
  console.log(p2);
  
let {id,login,avatar_url}=p2;
document.write(`<h1>${id}</h1>`)

})

}