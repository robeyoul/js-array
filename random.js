let arr= ['asha','raju','elora','happy','sohana','yeasin','hasib','roni','sumaiya']


let rand= Math.floor(Math.random()*arr.length)
  

for (var i = 0; i < arr.length; i++) {              
  
  if (rand==i) {
    console.log(arr[i].toUpperCase())
  }
  
  
}

console.log(rand)