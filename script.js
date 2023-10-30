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
  (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })("diyakshara is my daughter");
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
  function(array){
  var sum = 0;
  for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
   }
   return sum;
}
// IIFE :       
(function(array){
var sum = 0;
  for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
   }
   return sum;
})([1,2,3,4])
// Arrow:       
sum = (array)=>{
var sum = 0;
  for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
   }
   return sum;
   }

//=>Q4.Return all the prime numbers in an array
    //Anonymous 
    function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
   //IIFE 
                   (  
                   function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  })([1,2,3,4])
    //Arrow 
                primeNumber = (numArray) => {
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
//=>Q5.Return all the palindromes in an array
function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }
  //Anonymous   
  function (arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    //IIFE : 
    (  function (arr, n)
        {
            // Traversing each element of the array
            // and check if it is palindrome or not
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3)
//Arrow : 
Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
  //=>Q7.Remove duplicates from an Array
    //Anonymous 
    function(array){
                            let dup = [...new Set(array)];
                            console.log(dup);
                          }
    //IIFE            
    (function(array){
      let dup = [...new Set(array)];
      console.log(dup);
       })([1,1,2,3,4])
                           
//=>Q8.Rotate an array by K times
function reverse(array , li , ri){
        while(li < ri){
             int temp = a[li];
             a[li]= a[ri];
             a[ri] = temp;
             
             li++;
             ri--;
           }
       }
//Anonymous
        function(array , k){
                                 k = k % a.length;
                                   if(k < 0){
                                     k += a.length;
                                   }
       
                                   reverse(a, 0, a.length - k - 1);
                                   reverse(a, a.length - k, a.length - 1);
                                   reverse(a, 0, a.length - 1);
                                 }
                                 
//IIFE :   
(function(array , k){
                                 k = k % a.length;
                                   if(k < 0){
                                     k += a.length;
                                   }
       
                                   reverse(a, 0, a.length - k - 1);
                                   reverse(a, a.length - k, a.length - 1);
                                   reverse(a, 0, a.length - 1);
                                 })([1,2,3,4] , 2)
             
