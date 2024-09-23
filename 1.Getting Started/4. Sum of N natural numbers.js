// Find the Sum of N Natural Numbers in JavaScript
// Given an integer input “num” the objective is to sum up all the numbers that lay in the interval [0,num]. To do so we’ll write a code to Find the Sum of N Natural Numbers in Java.

// Example
// Input : 6
// Output : 21
// Explanation : 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21.

//Method 1:  for Loop
function sumofFirstNNaturalnumbers(n){
    let res = 0
    for(let i = 0; i<= n; i++){
        res += i
    }
    console.log('sumo of First N Natural numbers is ', res)
}
// Method 2: Formula
function sumofFirstNNaturalnumbersFormula(n){
let res =  n*(n+1)/2;
console.log(`Sum of First ${n} Natural Number is ${res} `);
}

//Method 3: Recursion.
const sumofFirstNNaturalnumbersResurison = (n) => {
    if(n === 0){
        return n;
    }else{
        return n + sumofFirstNNaturalnumbersResurison(n-1)
       
    }
}

sumofFirstNNaturalnumbers(10)
sumofFirstNNaturalnumbersFormula(10)
console.log('Sum of the First N Natural Numbers', sumofFirstNNaturalnumbersResurison(5));