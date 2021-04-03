let arr = [12,3,5,2,8,6,9,7,8,9,1]

let smallNumber= arr[0]

for (i of arr){
  if (i<smallNumber) {
    smallNumber= i
  }
}

console.log(arr)
console.log(`small Number : ${smallNumber}`);