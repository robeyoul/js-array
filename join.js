/* 
  The join() method returns the array as a string.

  The elements will be separated by a specified separator.
  The default separator is comma (,).
  
*/

var arr= [1,2,3,4,5]

var obj= arr.join()

console.log(obj); // 1,2,3,4,5

var arr2=['raju','Asha','sohana','elora']

var str= arr2.join(' + ')

console.log(str);
// raju + Asha + sohana + elora

var str1= arr2.join(' | ')
console.log(str1);
// raju | Asha | sohana | elora