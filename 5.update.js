// update array element with 1,2,3....


let name = ['raju','asha','elora','happy'];          

function updateName(arr){
  for (var i = 0; i < arr.length; i++) {
    arr[i]= `${i+1}. ${arr[i]}`
  }
  return arr
}

let updated= updateName(name)

console.log(updated);


// update an array by adding mr.
// before every array element.

let arr1=['Raju', 'Hasib','Sohel','Sabbir']


function addMr(names){
  for (var i = 0; i < names.length; i++) {
    
    names[i]= `${'Mr.'}  ${names[i]}`;
  }
  
  return names
}

console.log(addMr(arr1));
