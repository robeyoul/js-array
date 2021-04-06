/* 
  findIndex return only one element's index
  which is match with condition
  
  it is similar with find method
  
  
  
*/


var number=[5,10,15,20,25,30,40,]

var xyz= number.findIndex(num =>{
  return num %20==0
})

console.log(`index number: ${xyz}`);