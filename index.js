// ------------------------------use strict is used for strict mode ----------------------------------- 
"use strict";

// ------------------------------ print something on console ------------------------------------------ 
// console.log("hello world");

// ------------------------------ use a variable ------------------------------------------------------ 
// var firstName = "Pratik Patel";
// console.log(firstName);

// ------------------------------ change variable value -----------------------------------------------
// firstName = "Vinamra Patel"
// console.log(firstName);

// ------------------------------ JavaScript Arithmetic ----------------------------------------------- 

//    +	Addition
//    -	Subtraction
//    *	Multiplication
//    ** Exponentiation (ES2016)
//    /	Division
//    %	Modulus (Remainder)
//    ++	Increment
//    --	Decrement

// var a = 10;
// var b  = 10;
// var c = a + b;
// console.log(c);

// ------------------------------ let keyword ----------------------------------------------------------

// var keyword is used in older javascript now a days 90% code use let keyword
// let firstName = "Pratik";
// firstName = "Vinamra"
// in let keyword we can change varibale value but wen cannot define variable agian
// console.log(firstName);

// ------------------------------ const keyword ----------------------------------------------------------

// we can not change the value of the const
// pi have fixed value it can't be changed
// const pi = 3.14;
// console.log(pi);

// ------------------------------ indexing ----------------------------------------------------------------

// let firstName = "Pratik"
// P  r  a  t  i  k
// 0  1  2  3  4  5
// console.log(firstName[2]);

// find string length
// console.log(firstName.length);
// console.log(firstName[firstName.length-2]);

// ------------------------------ String methods ------------------------------------------------------------

// trim() :-
// let firstName ="    Pratik    "
// console.log(firstName.length);
// let newFirstName = firstName.trim();
// console.log(newFirstName.length);

// toUpperCase() & toLowerCase() :-
// let firstName ="Pratik"
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

// slice() :-
// P  r  a  t  i  k
// 0  1  2  3  4  5
// slice(startindex,endindex)
// let firstName ="Pratik"
// let newString = firstName.slice(1,4);
// console.log(newString);

// ------------------------------ typeof, string to number & number to string conversion -------------------------

// premetive Data types :-
// String :- represents sequence of characters e.g. "hello"
// Number :- represents numeric values e.g. 100
// Boolean :- represents boolean value either false or true
// Undefined :- represents undefined value
// Null :- represents null i.e. no value at all
// bigInt :-
// Symbol :-

// non-premetive Data types :-
// Object :- represents instance through which we can access members
// Array :- represents group of similar values
// RegExp :- represents regular expression

// type of :-
// let age = 22;
// let firstName = "Pratik";
// console.log(typeof age);
// console.log(typeof firstName);

// number to string
// let age = 22 + "";
// console.log(typeof age);
// let age = 22;
// age = String(age);
// console.log(typeof age);

// string to number
// let myString = +"34";
// console.log(typeof myString);


// ------------------------------ String concatenation -------------------------------------------------------

// let string1 = "Pratik";
// let string2 = "Patel";
// let fullName = string1 + " " + string2;
// console.log(fullName);

// ------------------------------ Template String ------------------------------------------------------------

// let age = 20;
// let firstName = "Pratik";

// let aboutMe = "My Name Is " +  firstName + " And My Age is " + age;
// console.log(aboutMe);

// let aboutMe = `My Name Is ${firstName} And My Age is ${age}`;
// console.log(aboutMe);

// ------------------------------ undefined null bigint ------------------------------------------------------------

// undefine :- 
// let firstName;
// console.log(typeof firstName);
// when you declare variable and dont assign any value at that time that type is undefine
// firstName = "Pratik";
// console.log(typeof firstName);

// null:-
// let myVariable = null;
// console.log(typeof myVariable);
// type of my variable give type object its bud or error

// bigInt:-
// let myNumber = 123;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);

// let myNumber = BigInt(99999); 
// let myNumber = 9999n;
// console.log(myNumber);

// ------------------------------ booleans & comperesion operator --------------------------------------------------

// boolean true ,false :-
// let num1 = 9;
// let num2 = 7;
// console.log(num1>num2);

// == vs ===
// let num1 = 9;
// let num2 = "9";
// console.log(num1==num2); //== compares just values
// console.log(num1===num2); //=== compares datatypes

// ------------------------------ truthy falsy ---------------------------------------------------------------------

// false
// ""
// null
// undefined
// 0


// try with 0,null,undefine all are falsy values

// let firstName = "Pratik";
// if (firstName) {
//     console.log(firstName);
// } else {
//     console.log("first name is empty");
// }


// ------------------------------ if else --------------------------------------------------------------------------


// let age = 15;

// if(age >= 18){
//     console.log("user can play pubg");
// }else{
//     console.log("user can not  play ludo");
// }

// ------------------------------ Ternery operator -----------------------------------------------------------------

// let age = 15;
// let drink;

// if(age>=5){
//      drink = "tea";
// }
// else{
//      drink = "milk";
// }

// console.log(drink);


// let age = 2;
// let drink = age >= 5 ? "tea" : "milk";
// console.log(drink);

// ------------------------------ AND OR -----------------------------------------------------------------
// let firstName = "Pratik";
// let age = 10;

// if(firstName[0] == "P"){
//      console.log("your name starts with P");
// }

// if(age > 18){
//      console.log("you are above 18");
// }

// if( firstName[0] == "P" && age > 18){
//      console.log("Both condition matched");
// }else{
//      console.log("both condition dosent match");
// }

// if( firstName[0] == "P" || age > 18){
//      console.log(" any single condition matched");
// }else{
//      console.log("any condition dosent match");
// }

// ------------------------------ nested if else -----------------------------------------------------------------

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number"); //prompt takes value in string so we put + before promp + converts string to num
// console.log(userGuess);

// if(userGuess === winningNumber){
//      console.log("your guess is right!!");
// }else{
//      if(userGuess < winningNumber){
//           console.log("to low!!")
//      }else{
//           console.log("to high!!");
//      }
// }

// ------------------------------ if elseif elseif ----------------------------------------------------------------

// let tempInDegree = 41;

// if(tempInDegree < 0) {
//     console. log("extremely cold outside");
// }
// else if(tempInDegree < 16) {
//     console. log("It is cold outside")
//  }
// else if(tempInDegree < 25) {
//     console. log("wheather is okay ");
//  }
// else if(tempInDegree < 35) {
//     console. log("lets go for swim");
//  }
// else if(tempInDegree < 45) {
//     console. log("turn on ac");
//  }
// else{
//  console. log("too hot!!");
// }
        
// ------------------------------ switch case ----------------------------------------------------------------

// let day = 12;

// switch (day) {
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.lconsole.log(i);og("wednesday");
//         break;
//     case 4:
//         console.log("thrusday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     default:
//         console.log("invalid day");
//         break;
// }

// ------------------------------ while loop ----------------------------------------------------------------

// print 1 to 10
// let i = 0;
// while(i<=10){
//      console.log(i);
//      i++;
// }


// 1 to 10 total

// let num = 10;
// let total = 0;
// let i = 0;

// while(i<=10){
//      total = total + i;
//      i++;
// }
// console.log(total);

// ------------------------------ for loop ----------------------------------------------------------------

// print 1 to 10
// for(let i =0; i <= 10 ; i++){
//      console.log(i);
// }

// 1 to 10 total
// let total = 0;
// let num = 10;
// for(let i =1; i<=num; i++){
//      total = total + i;
// }
// console.log(total);

// ------------------------------ break keyword  ----------------------------------------------------------------

// for(let i = 1; i<=10; i++){
//      if(i===5){
//           break; //try continue keyword here
//      }
//      console.log(i);
// }
// console.log("hello there");

// ------------------------------ do while loop  ----------------------------------------------------------------

//  let i = 0;
//  do{
//      console.log(i);
//      i++;
// }while(i<=90);

// ------------------------------ array  ----------------------------------------------------------------
// array is ordered collection of items
// array can store any datatyes

// let fruites = ["apple","mango","banana"];
// console.log(fruites);
// console.log(fruites[1]);

// let fruites = ["apple","mango","banana"];
// console.log(fruites);
// fruites[1] = "grapes";
// console.log(fruites);
// console.log(typeof fruites);
// console.log(Array.isArray(fruites));

// ------------------------------ array methods push,pop,shift,unshift  ----------------------------------------------------------------

// let fruites = ["apple","mango","banana"];

// push -->add element in last
// console.log(fruites);
// fruites.push("cheery");
// console.log(fruites);

// pop --> remove last element
// fruites.pop();
// console.log(fruites);

// let popedFruit = fruites.pop();
// console.log(popedFruit);

// unshift --> add element in starting
// fruites.unshift("cherry");
// console.log(fruites);

// shift --> remove elemt from start
// fruites.shift();
// console.log(fruites);


// ------------------------------  premituve v/s refrence  ----------------------------------------------------------------

// premitive type-->
// let num1 = 6;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1++;
// console.log(num1);
// console.log(num2);

// refrence type-->
// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log(array1);
// console.log(array2);
// // push one element
// array1.push("item3");
// console.log(array1);
// console.log(array2);

// ------------------------------  clone array ----------------------------------------------------------------

// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log(array1 === array2);

// slice clone array from position hat passed in brcates
// let array3 = array1.slice(0);
// console.log(array3);

// concate way to clone
// let array4 = [].concat(array1);
// console.log(array4);

// new way
// let array5 = [...array1];
// console.log(array5);

// add extra items in cloned array
// let array6 = array1.slice(0).concat("item3","item4");
// console.log(array6);

// let array7 = [...array1,"item3","item4"];
// console.log(array7);


// ------------------------------  forloop in array ----------------------------------------------------------------

// let fruites = ["apple","mango","grapes","banana"];

// console.log(fruites.length);
// console.log(fruites[1]);
// console.log(fruites[fruites.length-1]);

// let upperfruits = [];
// for(let i=0 ; i < fruites.length; i++){
//     console.log(fruites[i]);
//     upperfruits.push(fruites[i].toUpperCase());
// }
// console.log(upperfruits);

// ------------------------------  const for creating array ----------------------------------------------------------------

// const fruites = ["apple","mango"];

// fruites.push("banana");
// console.log(fruites);

// ------------------------------  while loop in array ----------------------------------------------------------------

// const fruites = ["apple","mango","grapes","banana"];

// let i = 0;
// while(i<fruites.length){
//     console.log(fruites[i]);
//     i++;
// }

// ------------------------------  for off loop in array ----------------------------------------------------------------

// const fruites = ["apple","mango","grapes","banana"];
// for(let fruit of fruites){
//     console.log(fruit);
// }

// ------------------------------  for in loop in array ----------------------------------------------------------------

// const fruites = ["apple","mango","grapes","banana"];
// for(let fruit of fruites){
//     console.log(fruit);
// }

// ------------------------------  array destructing ----------------------------------------------------------------

// const myArray = ["value1","value2"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log(myvar1);
// console.log(myvar2); 

// let [myvar1,myvar2] = myArray;
// console.log(myvar1);
// console.log(myvar2); 

// ------------------------------  objects ----------------------------------------------------------------
// --> array are good but not sufficient for real world data
// --> object stored key value pair
// --> objects don't have index

// -->how to create object

// const person = {name:"Pratik",age:20}
// console.log(person);
// console.log(typeof person);

// console.log(person.name);
// console.log(person.age);

// const person2 = {
//     name:"Pratik",
//     age:20,
//     hobiiees : ["music","reading","tracking"]
// }

// console.log(person2.hobiiees);

// const person3 = {
//     name:"Pratik",
//     age:20,
//     hobiiees : ["music","reading","tracking"]
// }
// person3.gender ="male";
// console.log(person3);


// const person4 = {
//     name:"Pratik",
//     age:20,
//     hobiiees : ["music","reading","tracking"]
// }
// console.log(person4["name"]);


// ------------------------------  dot v/s bracates notation  ----------------------------------------------------------------

// const person = {
//     name:"Pratik",
//     age:20,
//     "person hobiiees" : ["music","reading","tracking"]
// }
// console.log(person["person hobiiees"]);


// const key = "email";
// const person1 = {
//     name:"Pratik",
//     age:20,
//     "person hobiiees" : ["music","reading","tracking"]
// }
// person1[key] = "pratik@gmail.com"
// console.log(person1);

// ------------------------------ itterate(loop) object  ----------------------------------------------------------------

// const person = {
//     name:"Pratik",
//     age:20,
//     "person hobiiees" : ["music","reading","tracking"]
// }

// for(let key in person){
//     // console.log(`${key} : ${person[key]}` );
//     console.log(key,":",person[key]);
// }


// const person = {
//     name:"Pratik",
//     age:20,
//     "person hobiiees" : ["music","reading","tracking"]
// }

// for(let key of Object.keys(person)){
//     console.log(key,":",person[key]);
// }


// ------------------------------ computed properties  ----------------------------------------------------------------

// const key1 = "objkey1";
// const key2 ="objkey2";

// const value1 = "myvalue1";
// const value2 ="myvalue2";

// const obj = {

//     [key1] : value1,
//     [key2] : value2

// }
// console.log(obj);


// ------------------------------ spread operator  ----------------------------------------------------------------

// // spread operator in array
// const array1 = [1,2,3];
// const array2 = [5,6,7];

// // const newarray = [...array1,...array2,8,9];
// const newarray = [..."123456789"]; //only string spread in array
// console.log(newarray);

// spread operator in object
// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// };

// const obj2 ={
//     key3:"value3",
//     key4:"value4"
// }

// const newobj={...obj1,...obj2,key5:"value5"};
// const newobj={..."abc"};
// console.log(newobj);

// ------------------------------ object destructing  ----------------------------------------------------------------

// object destructing

// const band ={
//     bandName:"BTS",
//     famousSong:"any song"
// };

// const Var1 = band.bandName;

// const {bandName} = band

// const {bandName:var2} = band;

// console.log(var2);

// ------------------------------ objects inside array ----------------------------------------------------------------

// const users = [
//     {user_id:1,firstName:"Pratik",gender:"men"},
//     {user_id:2,firstName:"Harsh",gender:"men"},
//     {user_id:3,firstName:"Yash",gender:"men"}
// ]

// for(let user of users){
//     console.log(user.firstName);
// }


// ------------------------------ Nested destructing ----------------------------------------------------------------


// const users = [
//     {user_id:1,firstName:"Pratik",gender:"men"},
//     {user_id:2,firstName:"Harsh",gender:"men"},
//     {user_id:3,firstName:"Yash",gender:"men"}
// ]

// const [{firstName},user1,user2,user3] = users;
// console.log(firstName);
// console.log(user2);


// ------------------------------ Function declaration ----------------------------------------------------------------

// function singHappyBirthday(){
//     console.log("happy birthday");
// }

// singHappyBirthday();singHappyBirthday();singHappyBirthday();


// function twoPlusFour(){
//     console.log(2+4);
// }
// twoPlusFour();

// return value
// function twoPlusFour(){
//     return 2+4;    
// }
// console.log(twoPlusFour());


// function sum(num1,num2,num3){
//     return num1 + num2 + num3;
// }
// console.log(sum(5,5,5));


// odd or even
// input : 1 Number
// // output : true false
// function isEven(number){
//     if(number %2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(2));

// input string output first letter
// function firstChar(anystring){
//     return anystring[0];
// }
// console.log(firstChar("abc"));


// input array , target (number)
// output index of tareget if target present in array

// function findArray(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const MyArray = [1,3,8,0,19];
// console.log(findArray(MyArray,0));


// ------------------------------ Function expression ----------------------------------------------------------------


// const singHappyBirthday = function(){
//     console.log("happy birth day bla bla");
// }
// singHappyBirthday();

// const sum = function sum(num1,num2,num3){
//     return num1 + num2 + num3;
// }
// console.log(sum(5,5,5));


// const isEven = function(number){
//         if(number %2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(2));

// const firstChar = function(anystring){
//     return anystring[0];
// }
// console.log(firstChar("abc"));



// ------------------------------ Arow Function ----------------------------------------------------------------

// const singHappyBirthday = ()=> {
//     console.log("happy birthday");
// }
// singHappyBirthday();singHappyBirthday();singHappyBirthday();


// const twoPlusFour = ()=> {
//     console.log(2+4);
// }
// twoPlusFour();

// return value
// const twoPlusFour = ()=> {
//     return 2+4;    
// }
// console.log(twoPlusFour());


// const sum = (num1,num2,num3)=> {
//     return num1 + num2 + num3;
// }
// console.log(sum(5,5,5));


// odd or even
// input : 1 Number
// // output : true false
// const isEven =(number)=>{
//     if(number %2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(2));

// input string output first letter
// const firstChar = (anystring)=> {
//     return anystring[0];
// }
// console.log(firstChar("abc"));


// input array , target (number)
// output index of tareget if target present in array

// const findArray = (array,target)=> {
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const MyArray = [1,3,8,0,19];
// console.log(findArray(MyArray,3));

// ------------------------------ Hoisting ----------------------------------------------------------------
// hello(); we can use function before decalaration is called hoisting that works with only function declaartion
// function hello(){
//      console.log("hello world");
// }

// console.log(hello);
// const hello = "hello world";
// console.log(hello);


// ------------------------------ Function inside function ----------------------------------------------------------------

// const app = ()=>{
//      const myFunc = ()=>{
//           console.log("hello from myFunc");
//      }

//      const addTwo = (num1,num2)=>{
//           return num1+num2;
//      }

//      const mul = (num1,num2)=>{
//           return num1 * num2;
//      }

//      console.log("inside app");
//      myFunc();
//      console.log(addTwo(2,3));
//      console.log(mul(2,3));
// }
// app();

// ------------------------------ Lexical Scope ----------------------------------------------------------------

// function myApp(){

//      const myVar = "Value1";

//      function myFunc(){
//           const myVar = "Value 59"; //commnet this line and chek diffrence
//           const myFunc2 = ()=>{
//                console.log("inside myFunc",myVar); 
//           }
//           myFunc2();
//      }

//      console.log(myVar);
//      myFunc();
// }
// myApp();


// ------------------------------ block scope vs function scope ----------------------------------------------------------------
// let and const are block scope
// var is function scope

// {
//      let fName = "Pratik";
// }
// console.log(fName);


// {
//      var firstName = "Pratik";
// }
// console.log(firstName);


// if(true){
//      let firstName = "Pratik"; // try with var keyword
//      console.log(firstName);
// }
// console.log(firstName);


// function myApp(){

//      if(true){
//           let firstName = "Pratik"; // try with var
//           console.log(firstName);
//      }
//      console.log(firstName);

// }
// myApp();

// ------------------------------ default parameter ----------------------------------------------------------------

// function addTwo(a,b){
//      if(typeof b === "undefined"){
//           b=1;
//      }
//      return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);

// function addTwo(a,b=5){
//      return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);

// ------------------------------ Rest parameter ----------------------------------------------------------------

// function myFunc(a,b,c){
//      console.log(`a is ${a}`);
//      console.log(`b is ${b}`);
//      console.log(`c is ${c}`);
// }
// myFunc(3,4,5,6,7,8);


// function myFunc(a,b,...c){
//      console.log(`a is ${a}`);
//      console.log(`b is ${b}`);
//      console.log(`c is ${c}`);
// }
// myFunc(3,4,5,6,7,8,9);


// function addAll(...numbers){

//      let total = 0;
//      for (let number of numbers){
//           total = total + number;
//      }
//      return total;

// }
// const ans = addAll(1,2,3,4,56,7);
// console.log(ans);


// ------------------------------ parameter destructing ----------------------------------------------------------------
// used in object and react

// const person ={
//      firstName : "Pratik",
//      gender : "male"
// }

// function printDEtails(obj){
//      console.log(obj.firstName);
//      console.log(obj.gender);
// }
// printDEtails(person);

// function printDEtails({firstName,gender}){
//      console.log(firstName);
//      console.log(gender);
// }
// printDEtails(person);


// ------------------------------ callback function ----------------------------------------------------------------

// function myFunc2(name) {
//      console.log('inside my func')
//      console.log(`name is ${name}`)
// }


// function myFunc(callback) {
//      console.log('hello here im function and ican ...')
//      callback('pratik');
// }
// myFunc(myFunc2);


// ------------------------------ function returning function ----------------------------------------------------------------

// function myFunc(){
//      return [1,2,3];
// }
// const ans = myFunc();
// console.log(ans);

function myFunc(){
     function hello(){
          return "hello";
     }
     return hello;
}
const ans = myFunc();
console.log(ans);
ans();


// ------------------------------  ----------------------------------------------------------------
