

// ! ARRAY LITERALS
// var arr1=[10]
// console.log(arr1);


// ! ARRAY CONSTRUCTOR
// var arr2=new Array(70)  
// console.log(arr2);

// ! Array is hetrogenous in nature

// var arr=[10,"hello",true,function(){},{},undefined,null]
// size are not fixed of Array 
// var arr=[10,20,30,40,50]
// console.log(arr[0]);//10
// console.log(arr[3]);//40

// ! Lenght is not A method in Array
// var arr=[10,20,30,40,50] 
// console.log(arr.length); //5  

// ! Method

 
//! 1 Pop() Remove the last  element from an array and return it

// var arr=[10,20,30,40,50] 
// console.log("Original Array",arr);

// console.log(arr.pop());

//! push() Append is new element to the end of array and return the new  lenght of the ARRAY

// arr.push("Hello")
// console.log(arr);

//! unshift() Inserts New element at the start of on array ,and return the new lenght of the array
// arr.unshift("Welcome")
// console.log(arr);

// ! shift() Removes the first element from an array and return it ,If the array is empty ,undefined is return and the array is not modified.

//  arr.shift("Welcome")
//  console.log(arr);


// ! Slice() Slice method is  Not Effect on the Original Array 

// var arr3=[10,20,30,40,50] 
// let x=arr3.slice(0,4)
// console.log(x);
// console.log(arr3);

// console.log(arr3.slice(0,2)); //10 20 



// ! Splice()  Splice method  is the Original Array Change 
// var arr4=[100,200,300,400,500] 
// arr4.splice(1,3,"hello",40000)
// console.log(arr4); //
//  console.log(arr4);

// // Add and Remove

// var arr5=[100,200,300,400,500] 
// arr5.splice(1,arr5.length-1,"helloo")
// console.log(arr5); 

// ! At()
// let arr=[10,20,30,40,50]
// console.log(arr.at(3));
// !includes()

// let arr=[10,20,30,40,50]
// console.log(arr.at(3));
// console.log(arr.at(100));//ud
// console.log(arr.includes(20)); //true
// console.log(arr.includes(420)); //flase


// ! to String()
// let arr=[10,20,30,40,50]
// console.log(arr.toString());  //Array to String
// ! join 
// console.log(arr.join("x"));  //Array to String


// ! concat()

// let a=[100,200,300];
// let b=[400,500,600];
// console.log(b.concat(a,b,a,b));
// console.log(a.concat(a,["hello",500,6000]));


// ! for Each()
// ! map()
// !find()
// !filtor()
// !reduce()


// ! for Each()  return is not Posiable

// let arr=[10,20,30,40,50]
// let x=arr.forEach((ele,i,arr)=>{
//      console.log(ele,i,arr);
//      return "I am ForEach"   
// }) 


// !  map() It is used to  return to Value

// let y=arr.map((ele,i,arr)=>{
//      console.log(ele,i,arr);
//      return "I am ForEach"   
// })

// console.log(x);
// console.log(y);


// !find()   Not return Array and it can not return multiple value

// let arr1=[20,10,30,10,40,30,20,20,50]
// let val=arr1.find((ele,i,arr)=>{
//      // console.log(ele,i,arr);
//      return ele==50;   
// })
// console.log(val);


// !filter   It reurn Array and It can return multipple value
// let arr1=[20,10,30,10,40,30,20,20,50]
// let val1=arr1.filter((ele,i,arr)=>{
//      console.log(ele,i,arr);
//      return ele==10;   
// })
// console.log(val1);

// !reduce()

// Example 1
// let arr=[10,20,30,40,50];
// let x=arr.reduce((acc,ele)=>{
//      console.log(acc,ele);
//      return acc+ele;   
// })
// console.log(x);

// Example 2
// let arr=[10,20,30,40,50];
// let x=arr.reduce((acc,ele)=>{
//      console.log(acc,ele);
//      return acc+ele;   
// },500)
// console.log(x);




//! splice and slice

// slice (start ,end)
// let arr1 =[10,20,30,40,50,60,70]
// let a=arr1.slice(1,5)
// console.log(a);

//! splice( start ,deleteCount ,add)
let arr1 =[10,20,30,40,50,60,70]
let a=arr1.splice(3,0,"100","200")
// let b=arr1.splice(1,5)
console.log(arr1);



