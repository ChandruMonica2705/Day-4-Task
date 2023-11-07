// =>Q1.Print odd numbers in an array
// Anonymous  :  
var result = [];
var a = function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));
// // IIFE :       
var result1 = [];
(function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result1.push(arr[i]);
    }
  }
  console.log(result1) ;
})([1,2,3,4,5,6,7,8,9,10])
// // Arrow Function 
var result = [];
var odd =(arr)=>{
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
odd([15,18,23,14,16,24]);
console.log(result);  

// // =>Q2.Convert all the strings to title caps in a string array
// // Anonymous  :  
var title=function (str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1); 
    } 
    return str.join(" ");
  }
  console.log(title("moNi chaNdru diYa"));
//   // IIFE : 
(function (str1) {
  str1 = str1.toLowerCase().split(" ");
  for (var i = 0; i < str1.length; i++) {
    str1[i] = str1[i].charAt(0).toUpperCase()+str1[i].slice(1); 
  } 
  console.log(str1.join(" "));
})("moNi chaNdru diYa")
//   // Arrow Function 
var titleCase = (str) => {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(" ");
  }            
 console.log(titleCase("diyakshara is my daughter"));

//  // =>Q3.Sum of all numbers in an array
//  // Anonymous  : 
var sum=function(arr){
  var num=0;
  for(var i=0;i<arr.length;i++)
  {
    num=num+arr[i];
  }
  return num;}
  console.log(sum([1,2,3]));
// // IIFE :       
 (function(array){
var sum = 0;
  for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
   }
   console.log(sum);
})([1,2,3,4])
// // Arrow:       
var sum=(arr)=>{
  var num=0;
  for(var i=0;i<arr.length;i++)
  {
    num=num+arr[i];
  }
  return num;}
  console.log(sum([1,2,3,4,5]));

// //=>Q4.Return all the prime numbers in an array
// //Anonymous 
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function printPrimeNumbers(arr) {
  const primeArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeArray.push(arr[i]);
    }
  }
  return primeArray;
}
console.log(printPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]));
//    
//    //IIFE 
function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
(function(arr) {
  const primeArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) {
      primeArray.push(arr[i]);
    }
  }
  console.log(primeArray); 
}) ([2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13])
//     //Arrow 
function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
var p=(arr)=>{
  const primeArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) {
      primeArray.push(arr[i]);
    }
  }
  return primeArray ; 
} 
console.log(p([1,2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17]));


//=>Q5.Return all the palindromes in an array
//Anonymous 
var Palindrome=function(arr)
{
let res = [];
for (let i=0;i<arr.length;i++)
{
  var data=arr[i].split("").reverse().join("");
  if(data===arr[i]){
  res.push(arr[i])
  }  
}
return res;}
console.log(Palindrome (['mom','dad','data']));
//IIFE : 
(function(arr){
let res1 = [];
for (let i=0;i<arr.length;i++)
{
  var data1=arr[i].split("").reverse().join("");
  if(data1===arr[i]){
  res1.push(arr[i]);
  }  
}
console.log(res1);
})(['mom','dad','data',"madam"])
// //Arrow : 
 var arrow=(arr)=>{
let res2 = [];
for (let i=0;i<arr.length;i++)
{
  var data2=arr[i].split("").reverse().join("");
  if(data2===arr[i]){
  res2.push(arr[i]);
  }  
}
return res2;
 }
console.log(arrow(["data","madam","dad"]));

//Q6.Return median of two sorted arrays of the same size.
//Anonymous 
var b=function median(arr1,arr2){
  let arr=[...arr1,...arr2];
  arr.sort((a,b)=>a-b)
  let n=arr.length;
  if(n%2===0)
  {
return((arr[n/2]+arr[n/2-1])/2)
  }
  else{
return(arr[Math.floor(n/2)])
  }
}
console.log(b([1,3,5,7],[2,4,6,8]));
//IIFE 
(function(arr1,arr2){
  let arr=[...arr1,...arr2];
  arr.sort((a,b)=>a-b)
  let n=arr.length;
  if(n%2===0)
  {
console.log((arr[n/2]+arr[n/2-1])/2);
  }
  else{
console.log(arr[Math.floor(n/2)]);
  }
})([1,3,5,7],[2,4,6,8])

////=>Q7.Remove duplicates from an Array
// //Anonymous
var r1=function removeDuplicates(arr) { 
  return [...new Set(arr)]; 
} 
console.log(r1(["apple", "mango", "apple", 
"orange", "mango", "mango"]));
// //IIFE :
(function(arr1) { 
arr1= [...new Set(arr1)]; 
console.log(arr1);
})(["apple", "mango", "apple", 
"orange", "mango", "mango"])
                           
// //=>Q8.Rotate an array by K times
// //Anonymous
var r=function (arr,k){
for (let i=0;i<k;i++){
  arr.push(arr[i]);
}
for(let i=0;i<k;i++){
  arr.shift();
}
return arr;
}
console.log(r([1,2,3,4,5],3));
// //IIFE :   
(function (arr,k){
  for (let i=0;i<k;i++){
    arr.push(arr[i]);
  }
  for(let i=0;i<k;i++){
    arr.shift();
  }
  console.log(arr);
  })([1,2,3,4,5],4)