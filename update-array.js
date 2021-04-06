//example 1

let arr=[1,2,3,7,5,6,7,8]
arr[3]=4

console.log(arr);

// example 2
// update array object

let student=[
  {roll: 1, name:'Raju'},
  {roll: 2, name:'Asha'},
  {roll: 3, name:'Elora'},
  {roll: 4, name:'Happy'}
  ]
  
  console.log(student);
  console.log('updated name');
  
  
  for (var i = 0; i < student.length; i++) {
    if (student[i].roll==3) {
      student[i].name= 'Elora Khatun'
      break;
    }
    
  }
  
  console.log(student);