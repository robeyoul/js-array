let arr=[10,20,30,40,50,60,70,80,90,100]                


 let sum= 0;
for (var i = 0; i < arr.length; i++) {
  
    sum+=arr[i];
    average= sum / arr.length
}

console.log(`Sum : ${sum}`)
console.log(`average : ${average}`);

// using forEach loop
console.log('using ForEach Function');

let arr2=[5,10,15,20,25,30,35,40,45,50]

let sum1=0;

arr2.forEach((i)=>{
  sum1+= i
  average1= sum1/arr2.length
})

console.log(`sum: ${sum1} | average : ${average1}`);



// using for of loop
console.log('using for of loop');

let arr3= [20,40,60,80,100]

sum3=0;

for(i of arr3){
  sum3+=i
  average3= sum3/arr3.length
}

console.log(`sum : ${sum3}  | average: ${average3}`)




