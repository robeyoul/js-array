/* 

  find() return only first value when 
  match the condition. 
  
  when 2 or more value match with the
  condition it return only 1st element
  
*/

var number= [10,20,30,40,50,60]


var findNumber= number.find(i=>{
  return i>10
})

console.log(findNumber); //20