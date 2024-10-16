//Find Sum of square numbers from 1 to 10 odd numbers

let sum = 0;
for(let i = 1; i <= 10; i++){
 if(i % 2 !== 0){
    sum = sum + Math.pow(i, 2);
    
 }
}
console.log("Sum of square numbers from 1 to 10 odd numbers: " + sum);


// output answer:
// Sum of square numbers from 1 to 10 odd numbers: 165
