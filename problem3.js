// Find the sum of the even numbers from 1 to 45

let sum = 0;
for(let i = 1; i <= 45; i++){
    if(i % 2 === 0){
        sum = sum + i;
    }
}
console.log("sum of the even numbers from 1 to 45: " + sum);

// output answer:
// sum of the even numbers from 1 to 45: 506
