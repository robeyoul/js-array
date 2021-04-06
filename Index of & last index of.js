/* 
  indexOf find index num of an specific
  elements of an array.
  
 * it start finding index left to right
 * if there are multiple same element
   in a array, it find only first element
 
  
  last index of also same of index of 
  method .but it start finding index right
  to left
  
*/

//            indexOf
//------------------------------------

let arr=['raju','asha','elora','elora','happy','asha','asha']; 

console.log(arr.indexOf('asha')) // 1


console.log(arr.lastIndexOf('raju')); //0
console.log(arr.lastIndexOf('elora')); //3



