// ! Promise  way 1

// let data=[{
//     id:1,
//     ename:"jhon",

// },{
//     id:2,
//     ename:"wick",
// }];

// let arr={message:"Failed to fetch"}
// let p1=new Promise((resolve,reject)=>{

//     if(10>2){
//         resolve(data)
//     }
//     else{
//         reject(arr)
//     }
// })
// console.log(p1);



// p1.then((result)=>{
//  console.log("I am then()",result);

// });

// p1.catch((arr)=>{
//     console.log("I am catch",err);

// });
// p1.finally(()=>{
//     console.log("I am finally");

// });



// ! Promise way 2

// let p1 = fetch("https://fakestoreapi.com/products");
// console.log(p1);


// p1.then((response) => {
//     console.log(response);

//     let p2 = response.json()
//     console.log(p2);

//     p2.then((data) => {
//         console.log(data);

//     })

//     p2.catch((err) => {
//         console.log(err);

//     })

// });

// p1.catch((err) => {
//     console.log(err);

// })



// ! Promise way 3


async function fetchUser() {
    try {
        let resp = await fetch("https://api.github.com/users")
        console.log(resp);
        
        let users = await resp.json()
        console.log(users);
        displayUsers(users)
    } 
    catch (error) {
        console.log(error);

    }
}
fetchUser()



function displayUsers(allusers){
console.log(allusers);
// way 1
allusers.map((users)=>{
let {login,avatar_url}=users
document.write(`<h1>${login}</h1>
    <img src='${avatar_url}'/>`)
})
}
// way2

// allusers.map(({login, avatar_url})=>{
//     document.write(`
//         <h1>${login}</h1>
//         <img src='${avatar_url}'/>
//         `)
//     });
//     }



    // ! setinterval(()=>{})

    //     let x=setInterval(()=>{
    //         console.log("Hello Everyone");
            
    //     },2000)

    //     setTimeout(()=>{
    //         console.log("Byeee");
            
    //     },5000)

    //     setTimeout(() => {
    //         console.log("***************",x);
    //         clearTimeout(x)
            
    //     }, 8000);


        // !Prompt()
    //     //! UserInput 
    //     let ename=prompt("Enter Your Name")
    //     console.log(ename);
    //     //!Conform
    //     console.log(confirm("Are you sure"));
        // !alert
    //    let c= alert("This site in restricted")

       