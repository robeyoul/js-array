/* 
  slice create a new array from existing
  array. there are 2 important use of slice
  method
  1. it remove array element and create new
  array
  2. it create new array
  
  
*/

let arr1=[1,2,3,4,5,6,7,8,9,10]

//we want create new array from 1 to 5
//index of arr1. here index 1=2,
// index 5=6. i
// so new array will be 2,3,4,5

let arr2= arr1.slice(1,5)


console.log(arr2)

// create new array

let arr3=[10,20,30,40]

let arr4= arr3.slice()
console.log(arr4);