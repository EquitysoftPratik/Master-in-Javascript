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

let i = 0;
do{
     console.log(i);
}while(i<=9);