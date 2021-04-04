/* 
   there are multiple way for adding new
   elements in a array. 
   
   1.push: push add elements at the end of
   an array
   
   2.unshift: unshift add elements at the 
   start of an array
   
   3.splice : splice add element where you 
   want to add specifically.
*/

//          push
//...................................
//example 1

let arr1=[1,2,3,4]

arr1.push(5,6,7)

console.log('add elemnt by push');
console.log(arr1);

// example 2

let arr2=[1,2,3,4,5]
let arr3=[6,7,8,9,10]

arr2.push(...arr3)
console.log('concate 2 array by push');
console.log(arr2)


//            unshift
//___________________________________
//example 1

let arr4=[1,2,3,4]

arr4.unshift(0,5,6,7,8)

console.log('add elements using unshift');
console.log(arr4);


//example 2

let arr5=[10,20,30,40]
let arr6=[50,60,70,80]

arr5.unshift(...arr6)

console.log('add 2 array using unshift');
console.log(arr5);



//               splice
//-----------------------------------
// example 1

let arr7=[1,2,3,4,7,8]

arr7.splice(4,0,5,6)

console.log('adding 5 and 6 using splice');             
console.log(arr7);

// example 2

let arr8=[1,2,3,9,10]
let arr9=[4,5,6,7,8]
arr8.splice(3,0,...arr9)


console.log('adding 2 array using splice');
console.log(arr8);