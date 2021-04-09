/*  
  find method shows value 
  findIndex shows value's index
*/  

var number=[5,10,15,20,40,60,80]

var find= number.find(num => num%20==0)

console.log(find); // 20


var findIndex= number.findIndex(num => num%20==0)

console.log(findIndex); // 3
