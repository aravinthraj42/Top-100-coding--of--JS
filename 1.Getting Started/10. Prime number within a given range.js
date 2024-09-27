// Find the Prime Numbers in a Given Interval in Java
// Given an integer input the objective is to check whether or not there are any Prime Numbers in the given interval or range. Therefore, we write a code to Find the Prime Numbers in a Given Interval in Java Language.

// Example
// Input : 2 10
// Output : 2 3 5 7


function PrimeNumberinGivenRange(a,b){
    let result = []
for(let i = a; i<=b; i++){
    // console.log(i);
 if(isPrime(i)){

    console.log('---------------')
     result.push(i)
 }
}
console.log(result)
}
const isPrime = (n) =>{
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i ===0){
            console.log(i)
            return false;
        }
    }
    return true;
}


PrimeNumberinGivenRange(2, 19);

// PrimeNumberinGivenRange(2,7)