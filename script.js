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
// IIFE :       
var result1 = [];
(function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result1.push(arr[i]);
    }
  }
  console.log(result1) 
})([1,2,3,4,5,6,7,8,9,10])
// Arrow Function 
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
console.log(result)  

// =>Q2.Convert all the strings to title caps in a string array
// Anonymous  :  
var title=function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    
    return str.join(' ');
  }
  console.log(title("moni chandru diya"))
  // IIFE : 
//   (function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     return str.join(' ');
//   })("diyakshara is my daughter");
  // Arrow Function 
  var titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }            
 console.log(titleCase("diyakshara is my daughter"))

 // =>Q3.Sum of all numbers in an array
 // Anonymous  :  
 var add=function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }

