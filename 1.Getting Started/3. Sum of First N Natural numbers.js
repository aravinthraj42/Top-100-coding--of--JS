// Find the Sum of First N Natural Numbers in JavaScript
// Given an integer input the objective is to write a code to Find the Sum of N Natural Numbers in C++. To do so we simply keep adding the value of the iter variable using a for loop.

// Example
// Input : num = 5
// Output : 15

// Where first 8 number is 1, 2, 3, 4, 5
// Sum of numbers = 1 + 2 + 3 + 4 + 5 = 15



function sumofFirstNNaturalnumbers(num){
    let result = 0;
    for(let i =1; i<=num; i++){
     // result = result + i;
     result += i;
    
    }
    console.log(`Sum of First ${num} Natural Number is ${result} `);
}

function sumofFirstNNaturalnumbersFormula(num){
    let result =  num*(num+1)/2;
   
    console.log(`Sum of First ${num} Natural Number is ${result} `);
}

function sumofFirstNNaturalnumbersResursion(num){
        if(num === 0){
         return num
        }
        return num +  sumofFirstNNaturalnumbersResursion(num - 1);
}
sumofFirstNNaturalnumbers(10)
sumofFirstNNaturalnumbersFormula(10)
console.log('Sum of First Natural Number is',sumofFirstNNaturalnumbersResursion(5))