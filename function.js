//! 1 Name Function(): we can call name function before declaration because of Hosting

// test() //hosting   
// // declaration 
// function test(){
//      console.log("hello");
//      console.log("hii");
//      console.log("byee");    
// }
// console.log(window); // Note : it is globle function ,,,Window 
// test() //func calling


//! 2. GEC With function
// debugger;
// console.log("Start");
// var a=10;
// console.log(a);
// function abc(){
//      console.log(a);
//      console.log("hello");   
// }
// var b= 100;
// console.log(c);
// b=400;
// abc();
// console.log(a,c,b);
// var c=1000;
// console.log("End");



//! 3 Anonymous function  

// function (){
      
// }


//! 4 function expression

// var fun=function(){
//      console.log("I am function Expression"); 
// }
// console.log(fun);
// fun();



//!  5 Return Types Function

// debugger;
// //? Example 1
// function calculate(){
//      var n1=10;
//      let n2=20;
//      const n3=30;
//      let sum = n1+n2+n3;
//      console.log(sum);
//      return sum;     
     
// }
// var calculatevalue=calculate();
// console.log(calculatevalue);


//? Example 2
// debugger;
// function calculate(){
//      var n1=10;
//      let n2=20;
//      const n3=30;
//      let sum = n1+n2+n3;
//      console.log(sum);
//      return sum;  
// }

// var z= calculate;
// console.log(z);
// let q = z();
// console.log(q);


//! 6 Parametreized Function

//? Example 1
// debugger;
// function sum(x,y){
//      console.log(x,y);
//      return x+y; 
// }

// let s =sum(10,20)
// console.log(s);




//? Example 2
// debugger;
// function test (n1,n2,n3){
//      console.log(n1,n2,n3);
//      console.log(arguments);
     
// }
// test(10,20,30,40,50,60)

//? Example 3
// debugger;
// function test (n1,n2,n3){
//      console.log(n1,n2,n3);
//      console.log(arguments);
     
// }
// test(10,20)


//! 7  Rest Parameter Function

// function test(a,b,...x){
//      console.log(a,b);
//      console.log(x);
  
// }
// test(10,20,30,40,50,60)


//!8 Nested Function

// Example 1
// debugger;
// function Parent(){
//      console.log("I am Perent Function");
     
//      function Child(){
//           console.log("I am Child Function");
          
//      }
//      Child()
// }
// Parent()

// // Example 2
// debugger
// function Parent(){
//      console.log("I am Perent Function");
     
//      function Child(){
//           console.log("I am Child Function");
          
//      }
//      return Child
// }
// let x=Parent()
// console.log(x);
// x()

// Parent()() //Js Curring


//! Nested Function 

//? Example 1
// debugger;
// function father(){
//      var money =50000;
//      console.log(money);
//      var car="bmw";

//      function Child(){
          
//          var savings=500;
//          console.log(savings+money);   
//      }
//      Child()
// }
// father()



//? Example 2

// debugger;
// function father(){
//      var money =50000;
//      var car="bmw";
//      console.log(money,car);

//      function Child(){  
//          var savings=500;
//          console.log(savings+money);   
//      }
//     return Child
// }
// let x=father()
// x()


//? lexical Scoping closure /

// function Perent(){
//   var a=10;
//   var x=30;
//   console.log(a,x);
  

//     function Child(){  
//         var b=100;
//         console.log(b+a);   
//     }
//     Child()
// }
// Perent()


// ? JS Curring Function

// function A(){
//     console.log("I am A");
    

//     function B(){
//         console.log("I am B");
        
//         function C(){
//             console.log("I am C");
            
//         }return C
//     }
//     return B
// }
// A()()() // Js Curring


//! IIFE Function
//? Example 1 
// Syntax (function(){})()
// (function(){
//     console.log("I am IIFE");
    
// })();

//? Example 2
// (function(){
//     console.log("I am IIFE 2");
    
// })()


//? Example 3

// let z=(function(){
//     var a=10;
//     var b=20;
//     return a+b;
// })()
// console.log(z);


//! 6.HOF  and CALLBACK Function

//We can say Call backzzz
debugger;
function sum(n1 ,n2){
    console.log(n1+n2); 
}
// We say Heigher oder function is Except
function calculate(a,b,fun){
    fun(a,b);
}
calculate(20,20, sum);

//! Arrow Function

// Syntax 
// ()=>{} 
 
    // ?There are Five Way to Write Arrow Functopn

//? Example 1   ..If you are having Oneline 
    // let a=() =>{
    //     console.log("I am Arrow Function");  
    // }
    // a()

//? Example 2

// let b=()=> console.log("I am Arrow Function 2");
// b()
//? Example 3
// let c = _ => console.log("I am Arrow Function 3");
// c()

// ? Example 4
// let d = n1 => console.log("I am Arrow Function 4",n1);
// d(100)

//? Example 5
// let e = (n1,n2) => console.log("I am Arrow Function 5",n1,n2);
// e(100,200)




//! Explicit return
// let f =(n1,n2)=>{
//     return n1+n2
// } 
// let val1=f(10,20) //30
// console.log(val1);


// //! implicit return

// let g=(n1,n2)=> n1+n2
// let val2=g(200,300)
// console.log(val2);




