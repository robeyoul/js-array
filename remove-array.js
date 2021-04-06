/* 
  there are many way to remove an
  elements of an array
  
  1. pop: pop remove at the end of the
  elements of an array
  
  2.shift: shift remove at the first element
  of an array
  
  3.splice: splice remove an element at any position
  
*/

//            pop
//-----------------------------------

let arr1=[1,2,3,4,5,6]

arr1.pop()
console.log(arr1);


//          shift
//-------------------------+-----++++

let arr2= [1,2,3,4,5]
arr2.shift()

console.log(arr2);

//          splice
//----------------------------------
// example 1

var arr3=[1,2,3,3,4,5,6,7,8]

arr3.splice(3,1)
console.log(arr3)

//example 2
//remove item by element name not index

let arr4=[10,20,30,40,50,60]

let removeItem= 30;

for (var i = 0; i < arr4.length; i++) {
  if (arr4[i]==removeItem) {
    arr4.splice(i,1)
  }
}

console.log(arr4);

//example 3

let arr5=[
  {roll : 1, name:'Raju'},
  {roll : 2, name:'elora'},
  {roll : 3, name:'asha'},
  {roll : 4, name:'happy'},
  ]
  
 var deleteName= 'asha'
 
 
 for (var i = 0; i < arr5.length; i++) {
   if (arr5[i].name==deleteName) {
     arr5.splice(i,1)
   }
 }
 
 console.log(arr5);