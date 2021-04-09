/* 
  every and some are two different method
  these methods return Boolean value - true
  or false
  
  every: every return true or false when all
  the elements fullfil the condition.
  
  some: some return true or false when minimum
  one element fullfil the condition.
*/


// Example 1

let number = [10,20,30,40,50,60,70]

let checkNumber=number.every((i)=>{
  return i>50
})

console.log(checkNumber);   // false

let checkNumber1= number.some((i)=>{
  return i>50
})

console.log(checkNumber1);  // true

//-------------------------------------
let student= [
    {Name: 'Raju'  , Roll: 101, Gpa:3.25 },
    {Name: 'Asha'  , Roll: 102, Gpa:2.85 },
    {Name: 'Happy' , Roll: 103, Gpa:3.50 },
    {Name: 'Elora' , Roll: 104, Gpa: 2.9 },
    {Name: 'Sohana' , Roll: 105, Gpa:3.00 },
    {Name: 'Hasib' , Roll: 106, Gpa: 4.00 },
  ]
  
  
  let checkGpa= student.every((i)=>{
    return i.Gpa>3.00
  })
  
  console.log(checkGpa);
  
  let checkGpa1= student.some((i)=>{
    return i.Gpa>3.00
  })
  
  console.log(checkGpa1);
  