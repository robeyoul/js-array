var arr5=[10,20,50,40,30,7]

let largeNumber= arr5[0]

arr5.forEach((i)=>{
  if (i > largeNumber) {
    largeNumber= i
  }
})
console.log(arr5)
console.log(`largeNumber: ${largeNumber}`)

