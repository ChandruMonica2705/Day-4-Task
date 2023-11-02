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
//     //Anonymous 
//     function(numArray){
//                       numArray = numArray.filter((number) => {
//                         for (var i = 2; i <= Math.sqrt(number); i++) {
//                           if (number % i === 0) return false;
//                         }
//                         return true;
//                       });
//                       console.log(numArray);
//                   }
//    //IIFE 
//                    (  
//                    function(numArray){
//                       numArray = numArray.filter((number) => {
//                         for (var i = 2; i <= Math.sqrt(number); i++) {
//                           if (number % i === 0) return false;
//                         }
//                         return true;
//                       });
//                       console.log(numArray);
//                   })([1,2,3,4])
//     //Arrow 
//                 primeNumber = (numArray) => {
//                       numArray = numArray.filter((number) => {
//                         for (var i = 2; i <= Math.sqrt(number); i++) {
//                           if (number % i === 0) return false;
//                         }
//                         return true;
//                       });
//                       console.log(numArray);
                  // }
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



//   //=>Q7.Remove duplicates from an Array

//     //Anonymous 
//     function(array){
//                             let dup = [...new Set(array)];
//                             console.log(dup);
//                           }
//     //IIFE            
//     (function(array){
//       let dup = [...new Set(array)];
//       console.log(dup);
//        })([1,1,2,3,4])
                           
// //=>Q8.Rotate an array by K times
// function reverse(array , li , ri){
//         while(li < ri){
//              int temp = a[li];
//              a[li]= a[ri];
//              a[ri] = temp;
             
//              li++;
//              ri--;
//            }
//        }
// //Anonymous
//         function(array , k){
//                                  k = k % a.length;
//                                    if(k < 0){
//                                      k += a.length;
//                                    }
       
//                                    reverse(a, 0, a.length - k - 1);
//                                    reverse(a, a.length - k, a.length - 1);
//                                    reverse(a, 0, a.length - 1);
//                                  }
                                 
// //IIFE :   
// (function(array , k){
//                                  k = k % a.length;
//                                    if(k < 0){
//                                      k += a.length;
//                                    }
       
//                                    reverse(a, 0, a.length - k - 1);
//                                    reverse(a, a.length - k, a.length - 1);
//                                    reverse(a, 0, a.length - 1);
//                                  })([1,2,3,4] , 2)
             
