// Check Whether a Given Number is Prime or Not in Java
// Given an integer input greater than 0. The objective is to Check Whether or Not the Number is a Prime. To do so we’ll write a code to Check Whether a Given Number is Prime or Not in Java that checks for the factors of the Number besides 1 and the number itself.

// Example
// Input : 23
// Output : Prime

// Prime Number
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
//  A natural number greater than 1 that is not prime is called a composite number. 
//  For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1,
//   involve 5 itself.

function PrimeNumber(number){
    let count  = 0;
    if(number < 2){
    console.log('Not Prime!!');
    return 0;
    }
    for(let i =1; i<=number; i++){
        if(number %i === 0){
            // console.log(i)
            count++
        }
    }
    let result = count <= 2 ? 'Given Number is Prime' : 'Not Prime';
    console.log(result);
}


function PrimeNumberHalf(number){
    let isPrime = true
    if(number<2){
        isPrime = false
    }
    for(let i =2; i<=number/2; i++){
        if(number % i === 0){
            // console.log(i)
            isPrime=false
        }

    }
    let result = isPrime ? 'Give Number is Prime ': ' Not Prime'
    console.log(result)
}
PrimeNumber(2)
PrimeNumberHalf(13)