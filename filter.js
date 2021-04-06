/* 
  filter() filtered an array by a
  condition and return a new array
  
  filter() contains 3 parameters
  
  filter(value,index,array)
*/

// Example 1

let numbers=[10,20,30,40,50,60,70,80,90,100]            


let biggerThan50= numbers.filter(num=>{
  return num>50
})

console.log(biggerThan50); // [60,70,80,90,100]


// Example 2

let student= [
    {Name: 'Raju'  , Roll: 101, Gpa:3.25 },
    {Name: 'Asha'  , Roll: 102, Gpa:2.85 },
    {Name: 'Happy' , Roll: 103, Gpa:3.50 },
    {Name: 'Elora' , Roll: 104, Gpa: 2.9 },
    {Name: 'Sohana' ,Roll: 105, Gpa:3.00 },
    {Name: 'Hasib' , Roll: 106, Gpa:4.00 },
  ]
  
  
// show list of students who's gpa greater than 3
  let talentStudent= student.filter(point =>{
    return point.Gpa>3.00
  })
  
  console.log(talentStudent);
  
// show list of students who's names length equal to 5
  let nameFilter= student.filter(objName =>{
    return objName.Name.length==5
  })
  
  console.log(nameFilter);
  
  
